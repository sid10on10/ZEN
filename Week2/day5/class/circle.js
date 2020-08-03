class Circle{
    constructor(...args){
        [this.radius, this.color] = args;
    }
    getRadius(){
        return this.radius;
    }
    getcolor(){
        return this.color;
    }
    setRadius(value){
        this.radius = value;
    }
    setColor(value){
        this.color = value;
    }
    toString(){
        return this.radius + " " + this.color;
    }
    getArea(){
        return Math.PI * 2 * this.radius;
    }
}

let mycircle = new Circle(15,"Red");
console.log(mycircle)
console.log(mycircle.getRadius())
console.log(mycircle.setRadius(10))
console.log(mycircle.getcolor())
console.log(mycircle.setColor("black"))
console.log(mycircle.getArea())
console.log(mycircle.toString())