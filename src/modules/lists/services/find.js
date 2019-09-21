const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.LISTS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray());
};
