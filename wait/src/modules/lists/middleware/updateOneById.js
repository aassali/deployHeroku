const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const listToUpdate = req.body;
  const { listId } = req.params;

  updateOneById(listId, listToUpdate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
