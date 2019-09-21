const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (listId, first, offset) => {
  return connect()
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.find({ listId }, { limit: first, skip: offset }))
    .then(cursor => cursor.toArray());
};
