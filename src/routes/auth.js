const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');


/**
 * @swagger
 *  components:
 * 
 *    securitySchemes:
 *      bearerAuth:
 *        type: http
 *        scheme: bearer
 *        bearerFormat: JWT
 *  
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - nombre
 *          - email
 *          - password
 *          - fechaNacimiento
 *        properties:
 *          nombre:
 *            type: string
 *            description: Nombre usuario
 *          email:
 *            type: string
 *            description: email Usuario
 *          fechaNacimiento:
 *            type: string
 *            description: fecha nacimiento usuario
 *          password:
 *            type: string
 *            description: password Usuario
 *          lenguajeProgramacion:
 *            type: string
 *            description: lenguaje programacion preferido
 *        example:
 *          nombre: Emilio
 *          email: emiliobau@hotmail.com
 *          fechaNacimiento: 1979/10/01
 *          password: emilio2301
 *          lenguajeProgramacion: javascript
 * 
 *      loginUser:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *          password:
 *            type: string
 *            writeOnly: true
 *        example:
 *          email: emiliobau@hotmail.com
 *          password: emilio2301
 *          
 *
 * 
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Create a user
 *    tags:
 *      - users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#components/schemas/User'
 *    responses:
 *      201:
 *        description: User created succesfully
 *        content:
 *          application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg: 
 *                    type: string
 *                  access_token:
 *                    type: string
 * 
 */
    
router.post('/register', usersController.register);



/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login user
 *    tags:
 *      - users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#components/schemas/loginUser'
 *    responses:
 *      200:
 *        description: Access token 
 *        content:
 *          application/json:
 *            schema: 
 *              type: object
 *              properties:
 *                access_token:
 *                  type: string    
 *      401:
 *        description: Authorization information is missing or invalid
 *        content:
 *          applicaton/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean  
 */
router.post('/login', usersController.login);


module.exports = router;