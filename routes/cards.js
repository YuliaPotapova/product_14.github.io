const routCards = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const auth = require('../middlewares/auth');

routCards.get('/', auth, getCards);
routCards.post('/', auth, createCard);
routCards.delete('/:cardId', auth, deleteCard);
routCards.put('/:cardId/likes', auth, likeCard);
routCards.delete('/:cardId/likes', auth, dislikeCard);

module.exports = routCards;
