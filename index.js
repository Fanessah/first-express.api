// To create a whole aPI we need 4 lines of code 
import express, { response } from "express"

// We are going to create a web application 
const app = express()
// now we have a web application above but its worthless



//IP address can either be static or dynamic ,
// dynamic is always changing . When we create a webiste we give it 
//a static address, Create domain name to static address


// standing in the api and checking something. this command doesnt end . 
//This is meant to run an api it is meant to run forever

// app.listen(3030, () => console.log("listening on port 3030..."))

// right now above any request cannot come thru , you have to tell express 
//specifically who is allowed to come in 

//give an example of a request we allow when somebody requests test and what to do . 
//To do this we need to create a function. every express function has 2 or 3 parameters 
//a good api always has a response i.e response.send(insert response)

app.get('/test',(request, response) => {
response.send({message:"Its all good man!"}) 
})

app.get('/',(request, response) => response.send({message:"welcome to our first API! You are a super star! "}))

app.get('error', (request,response) => {
response
.status(500)
.send({ message:'something went wrong', success:false})
})

app.listen(3030, () => console.log("listening on http://localhost:3030..."))

//localhost:3030/test will take you to what you just wrote . CTRl+C stops it from running 
