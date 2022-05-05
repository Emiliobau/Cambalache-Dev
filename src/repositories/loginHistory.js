const Models = require("../database/models")


const create = async (newLogin) => {
    return await Models.LoginHistory.create(newLogin);
  };

const getAll = async () => {
    const data = await Models.LoginHistory.findAll();
    return data;
  };

const getByUserId = async (userId) => {
    return await Models.LoginHistory.findAll( {where : { usuarios_id : userId}})
    
  };  
  
  module.exports = {   
      create,
      getAll,
      getByUserId
    };