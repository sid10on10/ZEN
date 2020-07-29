console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    let myarr = s.split(",").map(val=>+val);
    let sum = 0;
    for(i of myarr){
        sum+=i
    }
    return sum
}