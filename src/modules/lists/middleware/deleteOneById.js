const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { listId } = req.params;

  deleteOneById(listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
