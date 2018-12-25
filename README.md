# VuePractice
Vue练习

## Demo1
Hello Vue
一般来说只能有一个挂载点，在使用脚手架工具vue-cli中就会严格控制你，这两个div都要控制在一个大的div中

v-bind:title="timeMessage"
将这个元素节点的 title 特性和 Vue 实例的 timeMessage 属性保持一致


## Demo2
只有当实例被创建时 data 中存在的属性才是响应式的。
如果当前未使用，后续操作使用属性需要具有响应式，则需要在创建时设置初始值。

Object.freeze()
阻止修改现有的属性响应系统无法再追踪变化，相当于只读属性。
Cannot assign to read only property 'foo' of object '#<Object>'

v-once
只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。
请留心这会影响到该节点上的其它数据绑定

### 参数
<a v-bind:href="url">...</a>
例如，v-bind指令可以用于响应式地更新 HTML 特性
<a v-on:click="doSomething">...</a>
参数是监听的事件名

### 修饰符
待掌握

### 缩写
`<!-- 完整语法 -->`
`<a v-bind:href="url">...</a>`
`<!-- 缩写 -->`
`<a :href="url">...</a>`
`<!-- 完整语法 -->`
`<a v-on:click="doSomething">...</a>`
`<!-- 缩写 -->`
`<a @click="doSomething">...</a>`

## Demo3
计算属性
可以像绑定普通属性一样在模板中绑定计算属性,计算属性是基于它们的依赖进行缓存的。
Date.now() 不是响应式依赖。
computed: {
  now: function () {
    return Date.now()
  }
}

Method
不希望有缓存，请用方法来替代。

## Demo4
计算属性的setter

## Dem05【待完善】
侦听属性

## Demo06
Class绑定与Style绑定
v-bind:class
v-bind:style

## Demo07
条件渲染
v-if
v-else

v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## Demo08
列表渲染

## Demo09
替换数组与对象更改检测
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
以上方法会出发更新。

app.list.shift()
"zhangsan"
app.list.shift()
"lisi"
app.list.splice(0, 2, "zhangsan", "lisi")
(2) ["zhangsan", "lisi", __ob__: Observer]
app.list.push("lisi")
3
app.list.splice(2, 1)
["lisi"]
app.list.splice(2, 0, "wangwu", "sunliu")

### 注意事项
Vue 不能检测以下变动的数组：
1、当你利用索引直接设置一个项时，例如：
vm.items[indexOfItem] = newValue
2、当你修改数组的长度时，例如：
vm.items.length = newLength

既检测也修改数据
1、// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
2、// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
3、vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：
vm.$set(vm.items, indexOfItem, newValue)
