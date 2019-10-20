new Vue({
    el: '#exercise',
    data: {
        effectBool: false,
        effectInterval: null,
        selectClass: '',
        selectClass2: '',
        classOnOff: 'true',
        inputStyle: '',
        progress: 0,
        maxProgress: 50,
        progressInterval: null,
    },
    computed: {
        effect: function() {
            return {
                highlight: this.effectBool,
                shrink: !this.effectBool,
            };
        },
        progressPerc: function() {
            // x : 100 = progress : maxprog
            return Math.ceil(this.progress * 100 / this.maxProgress);
        },
    },
    methods: {
        startEffect: function() {
            if(this.effectInterval)
                clearInterval(this.effectInterval);

            this.effectInterval = setInterval(() => {
                this.effectBool = !this.effectBool;
            }, 500);
        },
        startProgress: function() {
            if(this.progressInterval !== null) return;

            this.progressInterval = setInterval(() => {
                if(++this.progress >= this.maxProgress)
                    clearInterval(this.progressInterval);
            }, 50);
        },
    }
});