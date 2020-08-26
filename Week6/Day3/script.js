var Tv = /** @class */ (function () {
    function Tv(parameters) {
        this.size = parameters.size;
        this.type = parameters.type;
        this.color = parameters.color;
        this.brand = parameters.brand;
        this.price = parameters.price;
        this.channel = parameters.channel;
        this.volume = parameters.volume;
    }
    Tv.prototype.increaseVolume = function () {
        if (this.volume < 100) {
            this.volume++;
        }
    };
    Tv.prototype.decreaseVolume = function () {
        if (this.volume > 0) {
            this.volume--;
        }
    };
    Tv.prototype.setChannel = function (value) {
        if (value > 50 && value < 100) {
            this.channel = value;
        }
    };
    Tv.prototype.increaseChannel = function () {
        this.channel++;
    };
    Tv.prototype.decreaseChannel = function () {
        this.channel--;
    };
    return Tv;
}());
