var app = new Vue({
    el : "#app",
    data : {
        list:["zhangsan", "lisi", "wangwu", "sunliu"]
    },
    methods: {
        replaceName : function(...name) {
            console.log(this.list);
            var arr = this.list.splice(0, name.length, ...name);
            console.log(arr);
            
            console.log(this.list);
        }
    },
});