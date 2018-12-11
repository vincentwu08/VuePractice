var app = new Vue({
    el:"app",
    data: {
        isActive: true,
        error: false
    },
    computed : {
        classObject : function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});