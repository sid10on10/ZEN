function getSelected(id){
    let elem = document.getElementById(id).selectedOptions;
    let selected = [];
    for(let i = 0; i < elem.length; i++){
        selected.push(elem[i].innerText)
    }
    return selected;
}



function dataInput(){
   let fname =  document.getElementById('firstname').value
   let lname = document.getElementById('lastname').value
   let address = document.getElementById('address').value
   let pincode = document.getElementById('pincode').value
   let gender = getSelected('gender')
   let food = getSelected('foodchoice')

   let state = document.getElementById('state').value
   let country = document.getElementById('country').value

   let data = [{'First Name': fname}, {'Last Name': lname},{'Address': address},{'PinCode': pincode}, {'Food':food}, {'Gender': gender},{'State': state},{'Country': country}];
   localStorage.setItem('data', JSON.stringify(data))
}

function addTableData(){
    let row = document.createElement('tr')
    let table = document.getElementById("output")
    let data = JSON.parse(localStorage.getItem('data'));

    let firstname = document.createElement('td')
    firstname.innerText = `${data[0]['First Name']}`
    row.appendChild(firstname)
    let lastname = document.createElement('td')
    lastname.innerText = `${data[1]['Last Name']}`
    row.appendChild(lastname)
    let address_value = document.createElement('td')
    address_value.innerText = `${data[2]['Address']}`
    row.appendChild(address_value)
    let pincode_value = document.createElement('td')
    pincode_value.innerText = `${data[3]['PinCode']}`
    row.appendChild(pincode_value)
    let gender_value = document.createElement('td')
    gender_value.innerText = `${data[5]['Gender'].toString()}`
    row.appendChild(gender_value)
    let food_value = document.createElement('td')
    food_value.innerText = `${data[4]['Food'][0].toString()}`
    row.appendChild(food_value)
    let food_value1 = document.createElement('td')
    food_value1.innerText = `${data[4]['Food'][1].toString()}`
    row.appendChild(food_value1)
    let state_value = document.createElement('td')
    state_value.innerText = `${data[6]['State']}`
    row.appendChild(state_value)
    let country_value = document.createElement('td')
    country_value.innerText = `${data[7]['Country']}`
    row.appendChild(country_value)

    table.appendChild(row)
    localStorage.setItem('data', null)
}
addTableData();
