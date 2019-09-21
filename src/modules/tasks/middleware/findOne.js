const findOne = require('../services/findOne');

module.exports = (req, res, next) => {
  const { listId, taskId } = req.params;
  findOne(taskId, listId)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};
