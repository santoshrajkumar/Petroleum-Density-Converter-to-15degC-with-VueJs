new Vue({
    el: "#app",

    data: {
        density: '',
        temp: '',
        prod: 'HSD',
        displayDensity: '',
        calculated: false
    },

    methods: {
        calcDensity: function(){

            var C, lower_limit, upper_limit;

            if (this.prod === 'MS'){
                C = 0.9
                lower_limit = 720
                upper_limit = 775
              } else if (this.prod === 'HSD') {
                var C = 0.7
                lower_limit = 820
                upper_limit = 855
              } else {
                C = 0.7
                lower_limit = 700
                upper_limit = 855
            }

            var d15 = parseFloat(this.density) + C*(parseFloat(this.temp) -15);
            
            if (isNaN(d15)){
                this.displayDensity = 'Input Error ! Please enter numbers only';
            } else {
                this.displayDensity = 'Density @ 15 deg C: ' + d15;
            }

            this.calculated = true;

        },

        resetCalc: function(){
            this.calculated = false;
            this.density = '';
            this.temp = '';
            this.prod = 'HSD';
            this.displayDensity = '';

        }
    }

})