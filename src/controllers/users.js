const usersService = require('../services/users');
const loginHistoryService = require("../services/loginHistoy")

const register = async (req, res, next) => {
  
  try {
    const data = await usersService.create(req.body);
    res.status(200).json({
       status : 200,
       msg: `User created succesfully`,
       acces_token :  data });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
    try {
        const accessToken = await usersService.login(req.body,res);
        user = accessToken.user
        token = accessToken.token
        if (accessToken){
          loginHistoryService.create({
            fechaHora: new Date(),
            Tipo: 'tipo1',
            usuarios_id: user.id
          })
          res.status(200).json({
            status: 200,
            token: token });
        }
         else {
          res.status(401).json({
            status : 401,
            ok: false });
        }
    } catch (e) {
        next(e);
    }
};

const getAll = async (req, res, next) => {
  try {
    const data = await usersService.getAll();
    res.status(200).json({
      status : 200 ,
      data : data
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  
  const userId = req.params.id
  console.log(userId)
  const user = await usersService.getById(userId)
  if(!user){
      res.status(404).json({
          status : 404,
          data : {  msg : `user id ${user} not found` }
  })}
  try {
    const response = await usersService.update(userId, req.body);
    res.status(200).json({
      status : 200,
      msg: `user ${userId} is updated successfully`,
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const userId = req.params.id
  const user = await usersService.getById(userId)
  if(!user){
      res.status(404).json({
          status: 404,
          data : {  msg : `user id ${userId} not found` }
  })}
  try {
    await usersService.remove(userId);
    res
      .status(200)
      .json({
        status : 200,
        msg: `User ${userId} removed succesfully` });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    register,
    login,
    getAll,
    update,
    remove
};