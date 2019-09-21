const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');
const findOneByEmail = require('./findOneByEmail');

module.exports = (userToCreate) => {
  return createModel.validate(userToCreate)
    .then(() => {
      const user = {
        ...userToCreate,
        password: bcrypt.hashSync(userToCreate.password, 10),
      };
      return user;
    })
    .then((user) => {
      return findOneByEmail(user.email)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.USERS))
            .then(collection => collection.insertOne(user))
            .then(dbResponse => deleteUserPrivateKeys(dbResponse.ops[0]));
        });
    });
};
