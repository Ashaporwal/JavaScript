// let http=require("http")

// let server=http.createServer( (request,response)=>{
// response.end("WElcome to server")
// })


// server.listen("3000")//http://localhost:3000

let http=require("http")

let server=http.createServer( (request,response)=>{
    if(request.url =="/news"){//http://localhost:3000/news
        let obj={
            status:1,
            data:[
                {
                    newsTitle:'Indore',
                    newsDes:" hello Indori"
                },
                {
                    newsTitle:'IIP',
                    newsDes:"Good Morning Indore"
                }
            ]
        }
   response.end(JSON.stringify(obj));

    }
    if(request.url =="/about"){ //http://localhost:3000/about
// console.log("welcome to about");

    }

     if(request.url =="/contact"){
// response.end("welcome to contact");

    }

     if(request.url =="/"){ //http://localhost:3000
response.end("WElcome to server")
    }

})


server.listen("3000")//http://localhost:3000