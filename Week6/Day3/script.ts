
let videos = [ 
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ]
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" ]
    },
    {
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" ]
    }
]

class TV {
    price:number;
    inches:number;
    OnOFF:boolean;
    brand:string;
    channel:number;
    volume:number;
    player;
    notification;

    constructor(price, inches, OnOFF = false, brand="MI", channel=1, volume=25){
		this.price = price
		this.inches = inches
		this.OnOFF = OnOFF
		this.brand = brand
		this.channel = channel
        this.volume = volume
        this.player = document.getElementById('video_player');
        this.notification = document.getElementById('notification');
    }

    setVolume(volume){
        if(this.OnOFF && volume>0 && volume<100){
            this.volume = volume
            this.notification.innerHTML = `Volume<br>${this.volume}`
            setTimeout(this.fadeNot,2000)
        }
    }

    setChannel(channel){
        if(this.OnOFF && channel>0 && channel<10){
            this.channel = channel;
            this.player.src = videos[this.channel-1].sources;
            this.notification.innerHTML = `Channel ${this.channel}`;
        }
    }

    mute(){
        if(this.OnOFF){
            this.player.muted = !this.player.muted
        }
    }

    playPause(){
        if(this.OnOFF){
            if(this.player.paused){
                this.player.play();
            }else{
                this.player.pause();
            }
        }
    }

    OnOffbtn(){
        this.OnOFF = !this.OnOFF
        if(this.OnOFF){
            this.player.src = videos[this.channel-1].sources
        }else{
            this.player.src = "";
        }
    }

    fadeNot(){
        this.notification.innerHTML = "";
    }

}

let myTv = new TV(12000,40)
console.log(myTv.volume)

document.getElementById("+").addEventListener("click",function(){
    console.log("+")
    myTv.setVolume(myTv.volume+1);
})

document.getElementById("-").addEventListener("click",function(){
    console.log("-")
    myTv.setVolume(myTv.volume-1);
})

document.getElementById("next").addEventListener("click",function(){
    console.log("next")
    myTv.setChannel(myTv.channel+1);  
})

document.getElementById("prev").addEventListener("click",function(){
    console.log("prev")
    myTv.setChannel(myTv.channel-1);  
})

document.getElementById("power").addEventListener("click",function(){
    console.log("power")
    myTv.OnOffbtn()
})

document.getElementById("mute").addEventListener("click",function(){
    console.log("mute")
    myTv.mute()
})



