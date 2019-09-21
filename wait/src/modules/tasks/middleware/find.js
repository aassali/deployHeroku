const find = require('../services/find');

module.exports = (req, res, next) => {
  const { listId } = req.params;
  const {
    first,
    offset,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (first) firstInt = parseInt(first, 10);
  if (offset) offsetInt = parseInt(offset, 10);
  find(listId, firstInt, offsetInt)
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      next(err);
    });
};
