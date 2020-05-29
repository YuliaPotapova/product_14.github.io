const routUsers = require('express').Router();
const {
  getAllUsers, getUser, createUser, login, updateUser, updateAvatar,
} = require('../controllers/users');
const auth = require('../middlewares/auth');

routUsers.get('/', auth, getAllUsers);
routUsers.get('/:id', auth, getUser);
routUsers.post('/signup', createUser);
routUsers.post('/signin', login);
routUsers.patch('/me', auth, updateUser);
routUsers.patch('/me/avatar', auth, updateAvatar);

module.exports = routUsers;
