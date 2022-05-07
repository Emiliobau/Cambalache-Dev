const repositoriesRepository = require("../repositories/repositories");


const create = async (repository) => {
  return await repositoriesRepository.create(repository);
};

const getAll = async () => {
    const listRepository = await repositoriesRepository.getAll();
    return listRepository
};

const getByUserId = async (userId) => {
    const response = await repositoriesRepository.getByUserId(userId);
    return response;
};

const getById = async (Id) => {
    const response = await repositoriesRepository.getById(Id);
    return response;
};

const update = async (id, data) => {
     await repositoriesRepository.update(id, data);
     return repositoriesRepository.getById(id)
    
  };

const remove = async (id) => {
    await repositoriesRepository.remove(id);
  };  


module.exports = {
    create,
    getAll,
    getById,
    getByUserId,
    update,
    remove
    
  };
