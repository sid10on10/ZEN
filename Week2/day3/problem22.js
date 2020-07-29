var obj = {
    mykey: “value”
   };
   function getProperty(obj, key) {
    // your code here
    if(obj[key]===undefined){
        return "NA"
    }else{
        return obj[key]
    }
   }