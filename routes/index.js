const routes = require('express').Router();
const routUsers = require('./users');
const routCards = require('./cards');

routes.use('/users', routUsers);
routes.use('/cards', routCards);
routes.use((req, res) => res.status(404).json({ message: 'Запрашиваемый ресурс не найден' }));

module.exports = routes;
