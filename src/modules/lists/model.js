const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  description: joi.string().required(),
  userId: joi.string().required(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  description: joi.string(),
});

module.exports = {
  createModel,
  updateModel,
};
