function dataInput(){
   let fname =  document.getElementById('firstname').value
   let lname = document.getElementById('lastname').value
   let address = document.getElementById('address').value
   let pincode = document.getElementById('pincode').value
   let gender = document.getElementById('gender').selectedOptions.value
   let food1 = document.getElementById('foodchoice').selectedOptions[0].value
   let food2 = document.getElementById('foodchoice').selectedOptions[1].value
   let state = document.getElementById('state').value
   let country = document.getElementById('country').value

   
   let output = document.getElementById('output')
   output.innerHTML += `<tr><td>${fname}</td><td>${lname}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${food1}</td><td>${food2}</td><td>${state}</td><td>${country}</td></tr>`
    setTimeout(dataInput,1000)
}
dataInput()


