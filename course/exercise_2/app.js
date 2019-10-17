'use strict';

new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: () => alert('Hi, I am an alert!'),
        saveInput: function(e) { this.value = e.target.value; },
    },
});
