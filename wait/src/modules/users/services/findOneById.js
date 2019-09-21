const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((user) => {
      if (user) {
        return deleteUserPrivateKeys(user);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
