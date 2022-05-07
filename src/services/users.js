const usersRepository = require("../repositories/users");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../modules/auth")

const create = async (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  const data =  await usersRepository.create(user);
  return generateToken({ id: data.id })
  
};

const invalidUserMsg = "email or password is invalid.";

const login = async (body,res) => {
    const user = await usersRepository.findByEmail(body.email);
    if (!user) {
        return res.status(401).json({
            data : {
              msg : invalidUserMsg
            }
    })
    }
 
    if (!bcrypt.compareSync(body.password, user.password)) 
    {
        return res.status(401).json({
            data : {
              msg : invalidUserMsg
            }
    })
    };
    token =generateToken({ id: user.id })
    console.log(user)
    return{user,token}  
   
      
    
    
};

const getAll = async () => {
  const listUsers = await usersRepository.getAll();
  return listUsers
};

const getById = async (id) => {
  const response = await usersRepository.getById(id);
  return response;
};

const update = async (id, data) => {
  await usersRepository.update(id, data);
  return usersRepository.getById(id)
 
};

const remove = async (id) => {
  await usersRepository.remove(id);
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  update,
  remove
};