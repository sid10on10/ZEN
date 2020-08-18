let main = document.body
let mydiv = document.createElement("div")
mydiv.setAttribute("style","background-color:grey;width:100%;height:auto;display:flex;justify-content:center;")
let ol = document.createElement("ol")
mydiv.appendChild(ol)
main.appendChild(mydiv)


let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
};

request({url: "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"})
.then(data=>{
    arr = JSON.parse(data)
    console.log(arr)
    for(let i=0;i<data.length;i++){
        let li = document.createElement("li")
        li.setAttribute("style","display:flex;justify-content:center;")
        let card_div = document.createElement("div")
        card_div.setAttribute("class","card")
        let flag_img = document.createElement("img")
        flag_img.setAttribute("class","card-img-top")
        flag_img.setAttribute("src",arr[i]["flag"])
        flag_img.setAttribute("style","width:300px;height:200px;")
        let card_body = document.createElement("div")
        card_body.setAttribute("class","card-body")
        let card_head = document.createElement("h5")
        card_head.setAttribute("class","card-title")
        card_head.innerText = arr[i]["name"]
        
        let card_capital = document.createElement("p")
        card_capital.setAttribute("class","card-text")
        card_capital.innerText = "Capital : " + arr[i]["capital"]
        
        let card_region = document.createElement("p")
        card_region.setAttribute("class","card-text")
        card_region.innerText = "Region : " + arr[i]["region"]

        let card_lat = document.createElement("p")
        card_lat.setAttribute("class","card-text")
        card_lat.innerText = "Latlng : " + arr[i]["latlng"]
        
        let card_currency = document.createElement("p")
        card_currency.setAttribute("class","card-text")
        card_currency.innerHTML = `Currency Name: ${arr[i]["currencies"][0]["name"]} <br> Currency Code: ${arr[i]["currencies"][0]["code"]} <br> Currency Symbol: ${arr[i]["currencies"][0]["symbol"]}`
        
        card_body.appendChild(card_head)
        card_body.appendChild(card_capital)
        card_body.appendChild(card_region)
        card_body.appendChild(card_lat)
        card_body.appendChild(card_currency)
        

        card_div.appendChild(flag_img)
        card_div.appendChild(card_body)
        li.appendChild(card_div)
        ol.appendChild(li)
    }
})
