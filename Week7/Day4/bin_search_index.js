const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  let [n,k] = userInput[0].split(' ').map(a => +a);
  let arr = userInput[1].split(' ').map(a => +a);
  
  let brr = arr.map((a,i) => [a,i]);

  brr.sort((a,b)=> a[0]-b[0]);
  //console.log(brr);
  //console.log(typeof brr[1][0]);	
  let l=0,r=n-1,flag=0,p=-1;
  while(l <= r){
    let mid = l + parseInt((r-l)/2);
    if(brr[mid][0]===k){
      flag=1;
      p=brr[mid][1];
      break;
    }else if(brr[mid][0]>k){
      r = mid-1;
    }else if(brr[mid][0] < k){
      l = mid+1;
    }
  }
  console.log(p);
})