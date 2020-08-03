class calculator{
    constructor(val1,val2){
        this.val1 = val1
        this.val2 = val2
    }
    add(){
        return this.val1+this.val2
    }
    subtract(){
        return this.val1-this.val2
    }
    multiply(){
        return this.val1*this.val2
    }
    divide(){
        if(this.val2===0){
            console.log("ZERO Error")
        }else{
            return this.val1/this.val2
        }
    }
    mod(){
        return this.val1%this.val2
    }
}
let cal = new calculator(15, 5);
console.log(cal.add())
console.log(cal.subtract())
console.log(cal.multiply())
console.log(cal.divide())
console.log(cal.mod())
