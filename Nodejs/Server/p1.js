let http=require("http")

let server=http.createServer( (request,response)=>{
response.end("WElcome to server")
})


server.listen("3000")//http://localhost:3000