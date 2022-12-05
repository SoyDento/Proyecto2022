const { usersModel } = require("../models"); 

/**
 * obtener usuarios
 * @param {*} req
 * @param {*} res
 */

const getUsers = async (req, res) => {
    const { name } = req.query; 
    console.log(name); 
    if(name){
        const user = await usersModel.find({ name }); 
        res.json(user); 
    }else {
        const allUsers = await usersModel.find({}); 
        res.json(allUsers); 
    }
   
}



/**
 * crear un nuevo usuario
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
    const { body } = req; 

    const newUser = await usersModel.create(body); 
    res.json(newUser); 
}



module.exports = {
    getUsers,
    createUser, 

}