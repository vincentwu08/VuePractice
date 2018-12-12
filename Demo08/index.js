var app = new Vue({
    el : "#app",
    data : {
        items:[
            { message: 'Foo', show:true },
            { message: 'Bar', show:true }
        ]
    },
    methods : {
        changeStatus : function() {
            for (var i=0;i<this.items.length;i++) {
                this.items[i].show = !this.items[i].show;
            }
        }
    }
});