require('dotenv').config();
const path = require("path")

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'cambalache Api',
          version: '0.0.1',
          description:
            "api made for the cambalache tech challenge",
        },
        servers: [
          {
            url: `http://localhost:${process.env.PORT || 3000}`,
            description: 'test server',
          },
          {
            url: `https://cambalache-api-emi.herokuapp.com`,
            description: "produccion server"
          }
        ],
      },
     apis:["./src/routes/*.js"]
  

}

module.exports = swaggerOptions;