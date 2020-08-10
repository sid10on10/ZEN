// body
let main = document.body

main.setAttribute('style','display: flex;justify-content: center;')

// main container
let container = document.createElement('div')
container.setAttribute('style','background-color: #4a4e4d;height: auto;width: 800px;display:flex;justify-content: center;margin-top: 100px;')


// inner container
let container1 = document.createElement('div')
container1.setAttribute('style','width:600px;margin:50px;color:white;')


// display
let display = document.createElement('input')
display.setAttribute('type','date')
display.setAttribute('id','dateofbirth')
display.setAttribute('style','width:400px;margin-left:100px;height:50px;font-size:30px;')

let another_div = document.createElement('div')
another_div.setAttribute('style','margin-top:60px;')

// generate button
let button = document.createElement("button")
button.setAttribute('style','width:100px;height:60px;background-color:#007bff;margin-left:260px;')
button.innerText = "Calculate"
button.setAttribute('onclick','calculate()')
another_div.appendChild(button)

// result container
let results = document.createElement('div')
results.setAttribute('class','container')

let years_div = document.createElement('div')
years_div.setAttribute('class','row')

let months_div = document.createElement('div')
months_div.setAttribute('class','row')

let days_div = document.createElement('div')
days_div.setAttribute('class','row')

let hours_div = document.createElement('div')
hours_div.setAttribute('class','row')

let minutes_div = document.createElement('div')
minutes_div.setAttribute('class','row')

let seconds_div = document.createElement('div')
seconds_div.setAttribute('class','row')

let milliseconds_div = document.createElement('div')
milliseconds_div.setAttribute('class','row')

results.append(years_div,months_div,days_div,hours_div,minutes_div,seconds_div,milliseconds_div)





container1.append(display,another_div,results)
container.appendChild(container1)
main.append(container)


// main js
function calculate(){
    let now = new Date();
    let dob = new Date(display.value);
    dob.setHours(0);

    cleardata();
    let milliSeconds =  now.getTime() - dob.getTime();
    
    if(isNaN(milliSeconds)) return;

    milliseconds_div.innerHTML = '<div class="result_item"> MilliSeconds:' + milliSeconds + '</div>';

    let yearCount = Math.floor(milliSeconds / (1000 * 3600 * 24 * 365));
    years_div.innerHTML = '<div class="result_item"> Year : ' + yearCount + '</div>';
    
    let monthCount  = yearCount * 12;
    months_div.innerHTML = ' <div class="result_item"> Months: ' + monthCount + '</div>';

    let daysCount = Math.floor(milliSeconds / (1000 * 3600 * 24));
    days_div.innerHTML = ' <div class="result_item"> Days: ' + daysCount + '</div>';
    
    let hourCount = Math.floor(milliSeconds / (1000 * 3600));
    hours_div.innerHTML = '<div class="result_item"> Hours: ' + hourCount + '</div>';
    
    let minutesCount = Math.floor(milliSeconds / (1000 * 60));
    minutes_div.innerHTML = '<div class="result_item"> Minutes: ' + minutesCount + '</div>';

    let secondsCount =   Math.floor(milliSeconds / 1000)
    seconds_div.innerHTML = '<div class="result_item"> Seconds: ' + secondsCount + '</div>';
}

function cleardata(){
    years_div.innerHTML = ""
    months_div.innerHTML = ""
    days_div.innerHTML = ""
    hours_div.innerHTML = ""
    minutes_div.innerHTML = ""
    seconds_div.innerHTML = ""
    milliseconds_div.innerHTML = ""
}


