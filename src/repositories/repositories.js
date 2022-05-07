const Models = require("../database/models")


const create = async (repository) => { 
    return await Models.Repository.create(repository);
  };

const getAll = async () => {
    const data = await Models.Repository.findAll();
    return data;
  };

const getByUserId = async (userId) => {
    return await Models.Repository.findAll( {where : { usuarios_id : userId}})
    
  };  

  const getById = async (id) => {
    return await Models.Repository.findByPk(id)
    
  };

  const update = async (id, data) => {
    return await Models.Repository.update(data, { where: { id : id } });
  };

  const remove = async (id) => {
    await Models.Repository.destroy({ where: { id: id } });
  };
  
  module.exports = {   
      create,
      getAll,
      getByUserId,
      getById,
      update,
      remove
   
    };