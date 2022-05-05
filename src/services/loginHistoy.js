const loginHistoryRepository = require("../repositories/loginHistory");


const create = async (newLogin) => {
  
  return await loginHistoryRepository.create(newLogin);
};

const getAll = async () => {
    const listLoginHistory = await loginHistoryRepository.getAll();
    return listLoginHistory
};

const getByUserId = async (userId) => {
    const response = await loginHistoryRepository.getByUserId(userId);
    return response;
};


module.exports = {
    create,
    getAll,
    getByUserId
  };
