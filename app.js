//Dependencies
const express = require('express')
const ejs = require('ejs')
const cors = require('cors')

//internal dependencies
const tagsController = require('./controller/tagsController')

//Define express aplication function
const app = express()

//cors set
app.use(cors({
    origin: '*',
    methods: ['GET','POST','PUT','DELETE']
}))

//json data type set
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//set view engine
app.set('view engine','ejs')

//static file genarate
app.use(express.static('assets'))

//tags controller
app.use('/tags',tagsController)

//Home route
app.get('/',(req,res)=>{
    res.send("Hello World")
})



//app server created
const port = process.env.PORT || 5000

app.listen(port,(err)=>{
    if (err) {
        console.log(err)
    } else {
       console.log("Server running on port "+port) 
    }
})