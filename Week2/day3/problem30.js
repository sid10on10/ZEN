var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   // your code here  
   let strarr = s.split("")
   strarr.reverse()
   return strarr.join("")
}