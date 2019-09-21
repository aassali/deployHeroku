const { Router } = require('express');
const createOne = require('./middleware/createOne');
const find = require('./middleware/find');
const deleteOne = require('./middleware/deleteOne');
const findOne = require('./middleware/findOne');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/lists/:listId/tasks')
  .post(createOne)
  .get(find);

router.route('/lists/:listId/tasks/:taskId')
  .delete(deleteOne)
  .patch(updateOne)
  .get(findOne);

module.exports = router;
