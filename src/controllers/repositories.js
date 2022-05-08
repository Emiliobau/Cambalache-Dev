const repositoriesService = require("../services/repositories")


const create = async (req, res, next) => {
    const repository = req.body 
    try {
       const newRepository = await repositoriesService.create(repository); 
        res.status(200).json({
            status: 200,
            msg: `Repository created succesfully`,
            data: newRepository,
        })        
    } catch (e) {
        next(e)
    }
};

const getAll = async (req, res, next) =>{
    try{
      const listRepository = await repositoriesService.getAll();
      return res.status(200).json({
         status: 200,
         listRepository : listRepository        })
      }  catch (error){
         next(error);
     }

};

const getByUserId = async (req, res, next) => {
    const userId = req.params.id
    try{
        const response = await repositoriesService.getByUserId(userId)
        if (response.length > 0 ) {
            res.status(200).json({
              status : 200,
              data : response
            })      
        }
            res.status(404).json({
                status : 404,
                data : {  msg : `repositories user id ${userId}} not found` }
        })             
    }
    catch (error){
        next(error)}
};

const update = async (req, res, next) => {
    const repositoryId = req.params.id
    const repository = await repositoriesService.getById(repositoryId)
    if(!repository){
        res.status(404).json({
            status: 404,
            data : {  msg : `repositories id ${repositoryId} not found` }
    })}
    try {
      const response = await repositoriesService.update(repositoryId, req.body);
      res.status(200).json({
        status: 200,
        msg: `Repository ${repositoryId} is updated successfully`,
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };

  const remove = async (req, res, next) => {
    const repositoryId = req.params.id
    const repository = await repositoriesService.getById(repositoryId)
    if(!repository){
        res.status(404).json({
            status: 404,
            data : {  msg : `repositories id ${repositoryId} not found` }
    })}
    try {
      await repositoriesService.remove(repositoryId);
      res.status(200).json({
          status: 200,
          msg: `Repository ${repositoryId} removed succesfully` });
    } catch (error) {
      next(error);
    }
  };





module.exports = {
    create,
    getAll,
    getByUserId,
    update,
    remove
  };

