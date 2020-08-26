interface Size{
    width:number;
    height:number;
}

class Tv {
    size:Size;
    type:string;
    color:string;
    brand:string;
    price:number;
    channel:number;
    volume:number;
    constructor(parameters){
        this.size = parameters.size;
        this.type = parameters.type;
        this.color = parameters.color;
        this.brand = parameters.brand;
        this.price = parameters.price;
        this.channel = parameters.channel;
        this.volume = parameters.volume;
    }

    increaseVolume(){
        if(this.volume<100){
            this.volume++;
        }
    }

    decreaseVolume(){
        if(this.volume>0){
            this.volume--;
        }
    }

    setChannel(value){
        if(value>50 && value <100){
            this.channel = value;
        }
    }

    increaseChannel(){
        this.channel++;
    }

    decreaseChannel(){
        this.channel--;
    }

}