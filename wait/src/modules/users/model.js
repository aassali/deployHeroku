const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  firstname: joi.string(),
  lastname: joi.string(),
}).with('firstname', 'lastname');

const updateModel = joi.object().keys({
  password: joi.string(),
  email: joi.string().email(),
  firstname: joi.string(),
  lastname: joi.string(),
}).with('firstname', 'lastname');

module.exports = {
  createModel,
  updateModel,
};
