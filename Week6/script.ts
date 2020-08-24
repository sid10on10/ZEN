let chunk  = function (arr:[],k:number){
                let outarr = []
                for(let i=0;i<arr.length;i+=k){
                    outarr.push(arr.slice(i,i+k))
                }
                return outarr
              }

let sum = (arr :[])=>arr.reduce((acc,item)=>acc+=item,0)

let filter = (arr :[])=>arr.filter(data=>data%3===0)

let find = (arr :[])=>arr.filter(data=>data%7==0)

let reduce = (arr:[])=>arr.reduce((total, item)=>total+item,0);






