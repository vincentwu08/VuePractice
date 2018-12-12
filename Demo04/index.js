var app = new Vue({
    el : '#app',
    data : {
        firstName : "",
        lastName : ""
    },
    computed : {
        // fullName : function () {
        //     // console.log('12222');
            
        //     return this.firstName + " " + this.lastName;
        // }
        fullName : {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
});