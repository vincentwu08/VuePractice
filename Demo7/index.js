var appVm = new Vue({
    el : '#app',
    data : {
        ok : true
    },
    methods : {
        changeStatus : function () {
            console.log('-------' + this.ok);
            this.ok = !this.ok;
        }
    }
});