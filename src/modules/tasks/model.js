const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  listId: joi.string().required(),
  checked: joi.boolean().required(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  checked: joi.boolean(),
});

module.exports = {
  createModel,
  updateModel,
};
