var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 for(i of arr){
     let myobj = {}
     for(j of i){
         myobj[j[0]] = j[1]
     }
     tranformEmployeeList.push(myobj)
 }
 
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr))