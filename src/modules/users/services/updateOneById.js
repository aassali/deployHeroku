const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = async (id, userToUpdate) => {
  await updateModel.validate(userToUpdate);
  if (userToUpdate.password) {
    const user = {
      ...userToUpdate,
      password: bcrypt.hashSync(userToUpdate.password, 10),
    };
    return user;
  }
  const user_1 = userToUpdate;
  const db = await connect();
  const collection = db.collection(collections.USERS);
  const dbResponse = collection.updateOne({ _id: ObjectId(id) }, { $set: user_1 });
  if (dbResponse.matchedCount === 1) {
    return findOneById(id);
  }
  const err = new Error('Not Found');
  err.status = 404;
  throw err;
};
