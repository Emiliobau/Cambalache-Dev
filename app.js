const express = require('express');
const path = require('path');

const app = express();


app.listen(3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
    });


const indexRouter = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


