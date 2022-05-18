const { Console } = require('console');
const express = require('express');
const path = require('path');
require('dotenv').config();
const indexRouter = require('./src/routes/index');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = require('./src/docs/swaggerOptions');
const swaggerJsDoc = require('swagger-jsdoc');


const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`servidor funcionando puerto ${PORT}`);
    });



app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/', indexRouter);
app.use('/api/docs', swaggerUI.serve , swaggerUI.setup(swaggerJsDoc(swaggerOptions)))

