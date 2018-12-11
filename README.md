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


