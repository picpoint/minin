const {Router} = require('express');
const rout = Router();
const Card = require('../models/cardModel');
const Course = require('../models/courseModel');

rout.post('/add', async (req, res) => {
  const course = await Course.getById(req.body.id);
  await Card.add(course);
  res.redirect('/card');
});

rout.delete('/remove/:id', async (req, res) => {
  const card = await Card.remove(req.params.id);
  res.status(200).json(card);
});

rout.get('/', async (req, res) => {
  const card = await Card.fetch();
  res.render('card', {
    title: 'Корзина',
    isCard: true,
    courses: card.courses,
    price: card.price
  });
});

module.exports = rout;