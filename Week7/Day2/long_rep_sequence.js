const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
  inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  let n = +userInput[0]
  let nums = userInput[1].split(" ").map(val=>+val)
  let max = []
  for(let i=0;i<n;i++){
  	 let count = 1
     while(nums[i]==nums[i+1]){
     	count++;
        i++;
     }
     max.push(count)
  } 
  if(Math.max(...max)==1){
  	console.log(-1)
  }else{
    console.log(Math.max(...max))
  }
})