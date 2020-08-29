var videos = [
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
        "title": "For Bigger Escape"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
        "title": "For Bigger Fun"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
        "title": "For Bigger Joyrides"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
        "title": "For Bigger Meltdowns"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
        "title": "Sintel"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
        "title": "Subaru Outback On Street And Dirt"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
        "title": "Tears of Steel"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
        "title": "Volkswagen GTI Review"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
        "title": "We Are Going On Bullrun"
    },
    {
        "sources": ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
        "title": "What care can you get for a grand?"
    }
];
var TV = /** @class */ (function () {
    function TV(price, inches, OnOFF, brand, channel, volume) {
        if (OnOFF === void 0) { OnOFF = false; }
        if (brand === void 0) { brand = "MI"; }
        if (channel === void 0) { channel = 1; }
        if (volume === void 0) { volume = 25; }
        this.price = price;
        this.inches = inches;
        this.OnOFF = OnOFF;
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
        this.player = document.getElementById('video_player');
        this.notification = document.getElementById('notification');
    }
    TV.prototype.setVolume = function (volume) {
        if (this.OnOFF && volume > 0 && volume < 100) {
            this.volume = volume;
            this.notification.innerHTML = "Volume<br>" + this.volume;
            setTimeout(this.fadeNot, 2000);
        }
    };
    TV.prototype.setChannel = function (channel) {
        if (this.OnOFF && channel > 0 && channel < 10) {
            this.channel = channel;
            this.player.src = videos[this.channel - 1].sources;
            this.notification.innerHTML = "Channel " + this.channel;
        }
    };
    TV.prototype.mute = function () {
        if (this.OnOFF) {
            this.player.muted = !this.player.muted;
        }
    };
    TV.prototype.playPause = function () {
        if (this.OnOFF) {
            if (this.player.paused) {
                this.player.play();
            }
            else {
                this.player.pause();
            }
        }
    };
    TV.prototype.OnOffbtn = function () {
        this.OnOFF = !this.OnOFF;
        if (this.OnOFF) {
            this.player.src = videos[this.channel - 1].sources;
        }
        else {
            this.player.src = "";
        }
    };
    TV.prototype.fadeNot = function () {
        this.notification.innerHTML = "";
    };
    return TV;
}());
var myTv = new TV(12000, 40);
console.log(myTv.volume);
document.getElementById("+").addEventListener("click", function () {
    console.log("+");
});
document.getElementById("-").addEventListener("click", function () {
    console.log("-");
});
document.getElementById("next").addEventListener("click", function () {
    console.log("next");
});
document.getElementById("prev").addEventListener("click", function () {
    console.log("prev");
});
document.getElementById("power").addEventListener("click", function () {
    console.log("power");
});
document.getElementById("mute").addEventListener("click", function () {
    console.log("mute");
});
