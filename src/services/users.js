const usersRepository = require("../repositories/users");
const bcrypt = require("bcryptjs");

const create = async (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return await usersRepository.create(user);
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
    return user;
};

module.exports = {
  create,
  login,
};