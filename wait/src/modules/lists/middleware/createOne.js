const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const listToCreate = req.body;

  createOne(listToCreate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
