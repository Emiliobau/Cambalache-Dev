const Models = require("../database/models")



const create = async (user) => {
  return await Models.User.create(user);
};

const getAll = async () => {
  const data = await Models.User.findAll();
  return data;
};

const getById = async (id) => {
  const user = await Models.User.findByPk(id);
  return user;
};

const findByEmail = async (userEmail) => {
  const data = await Models.User.findOne({
    where: { email: userEmail },
    raw: true,
  });
  return data;
};

const update = async (id, data) => {
  return await Models.User.update(data, { where: { id : id } });
};

const remove = async (id) => {
  await Models.User.destroy({ where: { id: id } });
};


module.exports = {
  getAll,
  getById,
  findByEmail,
  create,
  remove,
  update,
};
