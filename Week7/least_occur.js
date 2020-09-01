let n = +userInput[0];
let nums = userInput[1].split(" ").map((val) => +val);
let myobj = {};

for (i of nums) {
  if (i in myobj) {
    myobj[i]++;
  } else {
    myobj[i] = 1;
  }
}
let keys = Object.keys(myobj);
let myarr = [];
for (i of keys) {
  myarr.push({
    value: i,
    count: myobj[i],
  });
}
myarr.sort((a, b) => a.count - b.count);
let mincount = myarr[0]["count"];
let outarr = [];
let filterarr = myarr.filter((data) => data.count == mincount);
for (i of filterarr) {
  outarr.push(i["value"]);
}

outarr.sort((a, b) => b - a);
console.log(outarr.join(" "));
