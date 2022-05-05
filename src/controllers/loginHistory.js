
const loginHistoryService = require("../services/loginHistoy")



const getAll = async (req, res, next) => {
    try {
      const response = await loginHistoryService.getAll()
      res.status(200).json({ msg: `Login History listed`, response})
  }
  catch (error){
    next(error)}
};

const getByUserId = async (req, res, next) => {
    const userId = req.params.id
    try{
        const response = await loginHistoryService.getByUserId(userId)
        if (response.length > 0 ) {
            res.status(200).json(response)      
        }
            res.status(401).json({
                data : {  msg : `login History user id ${req.params.id} not found` }
        })             
    }
    catch (error){
        next(error)}
}        
    


module.exports = {
    getAll,
    getByUserId
  };


