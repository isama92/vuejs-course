'use strict';

new Vue({
    el: '#app',
    data: {
        count: 0,

        coords: {
            x: null,
            y: null,
        },

        stopwatchInterval: null,
        stopwatch: 0,
    },
    methods: {
        increment: function(e, step = 1) {
            const count = this.count + step;
            this.count = count <= 100? count : 100;
        },
        decrement: function(e, step = 1) {
            const count = this.count - step;
            this.count = count >= 0? count : 0;
        },

        updateMouseCoords: function(e) {
            this.coords.x = e.clientX;
            this.coords.y = e.clientY;
        },

        startStopwatch: function() {
            if(this.stopwatchInterval === null) {
                this.stopwatchInterval = window.setInterval(() => {
                    this.stopwatch += 0.01;
                }, 10);
            }
        },
        stopStopwatch: function() {
            if(this.stopwatchInterval !== null) {
                window.clearInterval(this.stopwatchInterval);
                this.stopwatchInterval = null;
            }
        },
        resetStopwatch: function() {
            if(this.stopwatchInterval !== null) {
                window.clearInterval(this.stopwatchInterval);
                this.stopwatchInterval = null;
            }
            this.stopwatch = 0;
        },

        getStopwatch: function() {
            return this.stopwatch !== 0? this.stopwatch.toFixed(2) : this.stopwatch;
        },
    },
});
