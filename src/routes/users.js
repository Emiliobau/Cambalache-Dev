const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");
const authMiddleware = require("../middlewares/auth")


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
 */

/**
 * @swagger
 * /user:
 *  get:
 *      security:
 *        - bearerAuth: []
 *      summary: Return a list of users
 *      tags:
 *      - users
 *      responses:
 *          200:
 *              description: The list of Users
 *          content:
 *              application/json:
 *                  schema:
 *                      properties:         
 *                          data:
 *                          type: array
 *                          items:
 *                          $ref: '#/components/schemas/User'
 *          401:
 *              description: Unauthorized, expired or invalid token
 *      
 */

router.get('/',authMiddleware.isAuth, usersController.getAll);

/**
 * @swagger
 * /user/{id}:
 *  put:    
 *   security:
 *      - bearerAuth: []
 *   summary: Update user by the id
 *   tags:
 *    - users
 *   parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/User'
 *   responses:
 *      200:
 *          description: The User was updated
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              msg:
 *                type: string   
 *              data:
 *                $ref: '#/components/schemas/User'
 *      401:
 *          description: Unauthorized, expired or invalid token 
 * 
 *  
 */
router.put('/:id',authMiddleware.isOwnUser, usersController.update );

/**
 * @swagger
 *  /user/{id}:
 *    delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete user by the id
 *     tags:
 *       - users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
  *     responses:
 *        200:
 *          description: user deleted
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               msg:
 *                type: string  
 *        401:
 *         description: Unauthorized, expired or invalid token 
 *        404:
 *         description: User not found
 *      
 */

router.delete('/:id',authMiddleware.isOwnUser, usersController.remove);

module.exports = router;