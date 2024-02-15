const express = require('express');
const app = express();
const voiture = require('./voiture');


app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send("Something Broke !");
});


app.use('/voiture',voiture);

app.listen(4200,function(){
    console.log("Server Running on port 4200");
});