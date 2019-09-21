const deleteOne = require('../services/deleteOne');

module.exports = (req, res, next) => {
  const { listId, taskId } = req.params;

  deleteOne(taskId, listId)
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      next(err);
    });
};
