const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, userToUpdate) => {
  return updateModel.validate(userToUpdate)
    .then(() => {
      if (userToUpdate.password) {
        const user = {
          ...userToUpdate,
          password: bcrypt.hashSync(userToUpdate.password, 10),
        };
        return user;
      }
      return userToUpdate;
    })
    .then((user) => {
      return connect()
        .then(db => db.collection(collections.USERS))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: user }))
        .then((dbResponse) => {
          if (dbResponse.matchedCount === 1) {
            return findOneById(id);
          }

          const err = new Error('Not Found');
          err.status = 404;
          throw err;
        });
    });
};
