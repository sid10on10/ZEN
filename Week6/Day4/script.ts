class Card{
    url:string;
    img:string;
    heading:string;
    constructor(url:string,img:string,heading:string){
        this.url = url;
        this.img = img;
        this.heading = heading;
        (<HTMLDivElement>document.getElementById("audio-holder")).innerHTML += `<div class="card mb-3" style="max-width: 540px;"><div class="row no-gutters"><div class="col-md-4"><img src="${this.img}" class="card-img"></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">${this.heading}</h5><audio controls><source src="${this.url}"></audio></div></div></div></div>`
    }
}

(<HTMLButtonElement>document.getElementById("top")).addEventListener("click",
async (e)=>{
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "eab956df1cmshfa8f3a61aed24f8p19dd6cjsn66351b737de1",
          },
        }
      )
    let data = await response.json();
    console.log(data);
    (<HTMLDivElement>document.getElementById("audio-holder")).innerHTML = "";
    data.tracks.forEach((element) => {
        if(element.hub.actions==undefined){
            // pass
        }else{
            let card = new Card(element.hub.actions[1].uri,element.images.background,element.title)
        }
    });
}
);

(<HTMLButtonElement>document.getElementById("recommend")).addEventListener("click",
async (e)=>{
    let response = await fetch("https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "eab956df1cmshfa8f3a61aed24f8p19dd6cjsn66351b737de1"
        }
    });
    (<HTMLDivElement>document.getElementById("audio-holder")).innerHTML = "";
    let data = await response.json();
    console.log(data);
    data.tracks.forEach((element) => {
        if(element.hub.actions==undefined){
            // pass
        }else{
            let card = new Card(element.hub.actions[1].uri,element.images.background,element.title)
        }
    });
}
);



