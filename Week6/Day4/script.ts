class Card{
    url:string;

    constructor(url:string){
        this.url = url;
        (<HTMLDivElement>document.getElementById("audio-holder")).innerHTML += `<div class="row"><audio controls><source src="${this.url}" type="audio/mp4a"></audio></div>`
    }
}
interface RapidAPI{
    hub:{
        actions:[{
            uri:string;
        }]
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
    data.tracks.forEach((element:RapidAPI) => {
        console.log(element.hub.actions[1].uri)
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
    let data = await response.json();
    console.log(data);
}
);



