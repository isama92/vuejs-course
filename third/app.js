'use strict';

new Vue({
    el: '#app',
    data: {
        box1: false,
        attachBlue: false,
        color: 'white',
        box4: 'purple',
    },
    computed: {
        box3: function() {
            return {
                red: this.box1,
                blue: !this.box1,
            };
        },
    }
});
