const Joi = require('joi');
const { string, number } = require('joi');


const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    age: Joi.number().required(),
  });

 module.exports = {
  addSchema
 } 