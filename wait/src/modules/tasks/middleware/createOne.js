const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const { listId } = req.params;
  const taskToCreate = req.body;
  createOne(taskToCreate, listId)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      next(err);
    });
};
