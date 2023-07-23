
const {HttpError} = require('../helpers');

const users = require('../models/users');



const { ctrlWrapper } = require('../helpers');


const getAllUsers = async (req, res) => {
      const result = await users.getAll()
      res.json(result)
}

const getUserById =  async (req, res) => {
      const {id} = req.params
      const result = await users.getUserById(id);
      if(!result){
        throw HttpError(404, "Not found");
      }
      res.json(result)
}

const addUser = async (req, res) => {
      const result = await users.addUser(req.body);
      res.status(201).json(result)
}

const updateUser = async (req, res) => {
      const {id} =req.params;
      const [result] = await users.updateUser(id, req.body);
  
      if(!result){
        throw HttpError(404, "Not found")
      }
      res.json(result);
}
const deleteUser =  async (req, res) => {
    const {id} =req.params;
    const result = await users.removeUser(id);
    if(!result){
      throw HttpError(404, "Not found")
    }
    res.json({
      message: "Delete success"
    })
}

module.exports = {
    getAllUsers : ctrlWrapper(getAllUsers),
    getUserById : ctrlWrapper(getUserById),
    addUser: ctrlWrapper(addUser),
    deleteUser: ctrlWrapper(deleteUser),
    updateUser: ctrlWrapper(updateUser),
}