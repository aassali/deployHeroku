const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.deleteOne({ _id: ObjectId(id) }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItem: id,
        };
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
