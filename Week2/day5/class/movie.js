class Movie{

    constructor(title,studio,rating="PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    getPG(){
        if(this.rating=="PG"){
            return "Yes"
        }
        return "No"
    }
}

let mymovie = new Movie("Casino Royale","Eon Productions","PG13")
console.log(mymovie)
console.log(mymovie.getPG())