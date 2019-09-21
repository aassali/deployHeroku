const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (taskId, listId) => {
  return connect()
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.deleteOne({ _id: ObjectId(taskId), listId }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItem: taskId,
        };
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
