var app = new Vue({
    el : "#app",
    data : {
        items:[
            { message: 'Foo', show:true },
            { message: 'Bar', show:true }
        ],
        isFirstData:true,
        dataObject:{
            name:'tom',
            school:'chongwen middle school',
            age:23
        }
    },
    methods : {
        changeStatus : function() {
            for (var i=0;i<this.items.length;i++) {
                if(this.isFirstData){
                    this.items[i].show = i%2;
                }
                this.items[i].show = !this.items[i].show;
            }
            this.isFirstData = false;
        }
    }
});