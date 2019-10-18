new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeout: 5000,
    },
    computed: {
        result: function() {
            return this.value < 37? 'not there yet' : 'done';
        },
    },
    watch: {
        value: function(v) {
            if(this.result === 'done')
                setTimeout(() => {
                    this.value = 0;
                }, this.timeout);
        },
    },
});