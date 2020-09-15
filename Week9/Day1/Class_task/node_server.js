const fs = require("fs")
const http = require("http")
const path = require("path")

let host = "localhost";
let port = 8080;

let str = "";
    fs.readdir("/Users/sid/notatee",{ withFileTypes: true },function(err,files){
        if (err) throw err;
        files.forEach(file=>{
            if(file.isDirectory()){
                str+=`<li style="color:blue;">${file["name"]}</li>`
            }else if (file.isFile()){
                str+=`<li style="color:red;">${file["name"]}</li>`
            }
        })
    });

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(`<h1>${str}</h1>`)
    res.end()
}).listen(port,host,() => {
    console.log(`Server is running on http://${host}:${port}`);
})