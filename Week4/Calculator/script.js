function display(data){
    document.getElementById("result").value += data
}

function solve(){
    let expression = document.getElementById("result").value 
    let result = eval(expression)
    document.getElementById("result").value = result
}

function clearscreen(){
    document.getElementById("result").value = "";
}

function onlyNumberKey(evt) { 
          
    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
} 