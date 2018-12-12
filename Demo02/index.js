var bar = 'bar'

var obj = {
    foo: bar,
    rawHtml : '<span style="color:red">This should be red.</span>',
    isButtonDisabled : false
}
  
Object.freeze(bar)

var app = new Vue({
    el: '#app',
    data: obj
})
