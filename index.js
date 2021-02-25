Vue.createApp({
    data() {
        return {
            number1: 1, 
            number2: 1, 
            result: 2,
            operation : null

        }
    },
    methods: {
        calculate()
        {

            if(this.operation == "+")
            {
                this.result = this.number1 + this.number2
            }
            if(this.operation == "-")
            {
                this.result = this.number1 - this.number2
            }
            if(this.operation == "*")
            {
                this.result = this.number1 * this.number2
            }
            if(this.operation == "/")
            {
                this.result = this.number1 / this.number2
            }
        }
    }
}).mount("#app")