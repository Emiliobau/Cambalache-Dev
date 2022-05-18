RETO TECNICO CAMBALACHE - EMILIO BAUDRACCO

API realizada para reto tecnico Cambalache Technologies, realizada bajo el patron de arquitectura basado en repositorios.

Servidor: Heroku
Base de Datos: Alwaysdata

Documentacion y prueba de endpoints:
https://cambalache-api-emi.herokuapp.com/api/docs
seleccionar produccion server

Endpoints:

Actualmente estan documentados los endpoints de Users, los demas endpoints se encuantran en desarrollo

Los endpoints:
    auth/register
    auth/login 
Estos endpoints no requieren autorizacion para ser usados, el primero crea un nuevo usuario y el segundo inicia sesion de un usuario ya registrado, en ambos casos la respuesta exitosa de los mismos entregara un token de autorizacion, el cual debera ser usado para poder acceder a los demas endpoints creados, para utilizarlo ingresar el token en el encabezado de las solicitudes de los demas endpoints Authorization: Bearer 


Autor: Emilio Baudracco