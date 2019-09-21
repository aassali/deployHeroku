const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const userToUpdate = req.body;
  const { userId } = req.params;

  updateOneById(userId, userToUpdate)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
