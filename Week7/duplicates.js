let myarr = userInput[0].split("")

for (let index=0;index<myarr.length;index++)
{
    let flag = false
    for (let j=index+1;j<myarr.length;j++){
        if (myarr[index] === myarr[j]){
            myarr.splice(j,1)
            flag = true
            j--;
        }
    }
    if (flag)
    {
        myarr.splice(index,1);
        index--;
    }
}
console.log(myarr.join(""))