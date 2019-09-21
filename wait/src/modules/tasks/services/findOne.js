const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (taskId, listId) => {
  return connect()
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.findOne({ _id: ObjectId(taskId), listId }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`Task not found for id: ${taskId}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
