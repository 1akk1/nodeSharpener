const http = require('http');

const express = require('express');

const app = express()



app.use((req,res,next) => {
    console.log('1st middleware')
    next()
});

app.use((req,res,next) => {
    console.log('2nd middleware')
})


app.listen(3000)