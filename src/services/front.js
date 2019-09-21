const { Router } = require('express');
const userFindOneById = require('../modules/users/services/findOneById');
const userCreateOne = require('../modules/users/services/createOne');
const userUpdateOneById = require('../modules/users/services/UpdateOneById');
const userFind = require('../modules/users/services/find');

const router = new Router();

router.get('/users', (req, res, next) => {
  userFind()
    .then((users) => {
      res.render('users', { users });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/create', (req, res) => {
  res.render('createUser');
});

router.post('/users/created', (req, res, next) => {
  const userToCreate = req.body;

  userCreateOne(userToCreate)
    .then((user) => {
      res.render('userCreated', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/:userId', (req, res, next) => {
  const {
    userId,
  } = req.params;

  userFindOneById(userId)
    .then((user) => {
      res.render('user', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/update', (req, res, next) => {
  res.render('updateUser');
});

router.post('/users/updated', (req, res, next) => {
  const userToUpdate = req.body;

  userUpdateOneById(userToUpdate)
    .then((user) => {
      res.render('userUpdated', { user });
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
