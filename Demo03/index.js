
var app = new Vue({
    el: '#app',
    data: {
        message : "Hello"
    },
    // computed: {
    //     reversedMessage : function() {
    //         return this.message.split('').reverse().join('')
    //     }
    // },
    // 在组件中
    methods: {
        reversedMessage: function () {
            return this.message.split('', 3).reverse().join('')
        }
    }
});