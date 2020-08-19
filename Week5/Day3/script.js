let main = document.body
main.setAttribute("style","background-color:#667893;")
let mydiv = document.createElement("div")
mydiv.setAttribute("style","width:100%;height:auto;")
mydiv.setAttribute("class","card-group")
let header_div = document.createElement("div")
header_div.setAttribute("style","text-align:center;color:black;")
let header = document.createElement("h1")
header.setAttribute("style","color:white;font-family:monospace;")
header.innerText = "World Rest & Weather Data";
header_div.appendChild(header)
main.appendChild(header_div)
main.appendChild(mydiv)

async function getData(url){
    let country = await fetch(url)
    let arr = await country.json()
    return arr
}

async function display(a,b)
      {
      	let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=4b83b512b8a0c3028cf6fa4cd0a9f4c2`);
      	let jsondata= await data.json();
          alert("Temprature: "+jsondata.main.temp+" F "+"\n Description: "+ 
          	jsondata.weather[0].description);
      }



async function processCountry(){
    try{
        let arr = await getData('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
        console.log(arr)    
    for(let i=0;i<arr.length;i++){
        let outer_div = document.createElement("div")
        outer_div.setAttribute("style","display:flex;justify-content:center;padding:5px;")
        outer_div.setAttribute("class","col-lg-4 col-sm-12")
        
        let banner = document.createElement("div")
        banner.setAttribute("class","row")
        banner.setAttribute("style","background-color:black;color:white;font-size:20px;font-family:monospace;height:40px;width:100%;margin-left:2px;display:flex;justify-content:center;")
        banner.innerText = arr[i]["name"]
        
        let card_div = document.createElement("div")
        card_div.setAttribute("class","card")
        card_div.setAttribute("style","background: rgb(105,106,92);background: linear-gradient(90deg, rgba(105,106,92,1) 0%, rgba(205,197,115,1) 52%, rgba(98,98,81,1) 100%);")
        let flag_img = document.createElement("img")
        flag_img.setAttribute("class","card-img-top")
        flag_img.setAttribute("src",arr[i]["flag"])
        flag_img.setAttribute("style","width:300px;height:200px;padding:20px;")
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")
        
        
        let card_capital = document.createElement("p")
        card_capital.setAttribute("class","card-text")
        card_capital.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;")
        card_capital.innerText = "Capital : " + arr[i]["capital"]
        
        let card_region = document.createElement("p")
        card_region.setAttribute("class","card-text")
        card_region.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;")
        card_region.innerText = "Region : " + arr[i]["region"]

        let card_lat = document.createElement("p")
        card_lat.setAttribute("class","card-text")
        card_lat.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;")
        card_lat.innerText = "Latlng : " + arr[i]["latlng"]
        let lat = arr[i]["latlng"][0]
        let lon = arr[i]["latlng"][1]
        
        let card_code = document.createElement("p")
        card_code.setAttribute("class","card-text")
        card_code.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;")
        card_code.innerHTML = "Code :" + arr[i]["cioc"]

        let button = document.createElement("button")
        button.setAttribute("class", "btn btn-primary")
        button.setAttribute("onclick",`display(${lat},${lon})`)
        button.setAttribute("style","margin-left:50px;")
        button.innerText = "Click For Weather"
        
        
        card_body.appendChild(card_capital)
        card_body.appendChild(card_region)
        card_body.appendChild(card_lat)
        card_body.appendChild(card_code)
        card_body.appendChild(button)
        
        card_div.appendChild(banner)
        card_div.appendChild(flag_img)
        card_div.appendChild(card_body)
        outer_div.appendChild(card_div)
        mydiv.appendChild(outer_div)
    }
}catch(error){
    console.log(error)
}
}

processCountry();
