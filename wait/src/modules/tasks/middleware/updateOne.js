const updateOne = require('../services/updateOne');

module.exports = (req, res, next) => {
  const taskToUpdate = req.body;
  const { listId, taskId } = req.params;

  updateOne(taskId, listId, taskToUpdate)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
