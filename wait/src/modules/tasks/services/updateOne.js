const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./findOne');
const { updateModel } = require('../model');

module.exports = (taskId, listId, taskToUpdate) => {
  return updateModel.validate(taskToUpdate)
    .then(() => connect())
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.updateOne({
      _id: ObjectId(taskId),
      listId,
    }, { $set: taskToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(taskId, listId);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
