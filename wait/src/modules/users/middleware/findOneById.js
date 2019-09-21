const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { listId } = req.params;
  findOneById(listId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
