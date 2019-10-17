'use strict';

new Vue({
    el: '#app',
    data: {
        title: 'Hello World o/',
        str: '<strong>Fill the above textbox to change me!</strong>',
        link: 'https://www.google.com',
    },
    methods: {
        updateStr: function(e) { this.str = e.target.value; },
        getTitle: function() { return this.title; },
        getLink: function() { return this.link; },
    },
});
