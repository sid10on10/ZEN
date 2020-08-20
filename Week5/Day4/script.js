let main = document.body
main.setAttribute("style","background-color:#56a5eb;")
let outer = document.createElement("div")
outer.setAttribute("class","container")

let innerdiv = document.createElement("div")
innerdiv.setAttribute("class","center column")
innerdiv.setAttribute("style","margin-top:300px;")

let header = document.createElement("h1")
header.innerText = "Quick Quiz";
header.setAttribute("style","font-size: 5.4rem;margin-bottom: 5rem;font-family: Arial, Helvetica, sans-serif;")
innerdiv.appendChild(header)

let playbutton = document.createElement("button")
playbutton.setAttribute("id","play")
playbutton.setAttribute("href","game.html")
playbutton.innerText = "Play"
playbutton.setAttribute("class","btn")
innerdiv.appendChild(playbutton)

let highbutton = document.createElement("button")
highbutton.setAttribute("id","highScores")
highbutton.setAttribute("href","highscore.html")
highbutton.setAttribute("class","btn")
highbutton.innerText = "High Scores"
innerdiv.appendChild(highbutton)

outer.appendChild(innerdiv)
main.appendChild(outer)


async function getData(url){
    let country = await fetch(url)
    let arr = await country.json()
    return arr
}



