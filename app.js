const { Console } = require('console');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`servidor funcionando puerto ${PORT}`);
    });


const indexRouter = require('./src/routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);


