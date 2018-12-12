var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      timeMessage: '页面加载于 ' + new Date().toLocaleString()
    }
})

var app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello Vue1!',
    timeMessage: '1页面加载于 ' + new Date().toLocaleString()
  }
})