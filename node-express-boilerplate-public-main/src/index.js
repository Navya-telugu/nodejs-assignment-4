const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const sum=num1+num2
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"

        })
    }
    else if(sum<-1000000){
        return res.status(400).json({
            status: "error",
            message: "Underflow"

        })
    }
    else if(sum> 1000000){
        return res.status(400).json({
            status: "error",
            message: "Overflow"

        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "the sum of given two numbers",
            sum: num1 + num2
        })
    }
})

app.post("/sub", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const difference=num1-num2
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"

        })
    }
    else if(difference<-1000000){
        return res.status(400).json({
            status: "error",
            message: "Underflow"

        })
    }
    else if(difference> 1000000){
        return res.status(400).json({
            status: "error",
            message: "Overflow"

        })
    }
    else{
        res.status(200).json({
            status: "success",
            message: "the difference of given two numbers",
            difference: num1 - num2
        })
    }
})

app.post("/mul", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const mul=num1*num2
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"

        })
    }
    else if(mul<-1000000){
        return res.status(400).json({
            status: "error",
            message: "Underflow"

        })
    }
    else if(mul > 1000000){
        return res.status(400).json({
            status: "error",
            message: "Overflow"

        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "The product of given numbers",
            sum: num1 *num2
        })
    }
})

app.post("/div", (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2
    const div=num1/num2
    if (typeof (num1) === "string" || typeof (num2) === "string") {
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"

        })
    }
    
    if(num2==0){
        return res.status(400).json({
            status: "error",
            message: "Cannot divide by zero"

        })
    }
    if(div <-1000000){
        return res.status(400).json({
            status: "error",
            message: "Underflow"

        })
    }
    if(div> 1000000){
        return res.status(400).json({
            status: "error",
            message: "Overflow"

        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "The division of given numbers",
            sum: num1 / num2
        })
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;