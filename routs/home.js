const {Router} = require('express');
const rout = Router();


rout.get('/', (req, res) => {
  res.render('index', {
    title: 'Домашняя страница',
    isHome: true
  });
});

module.exports = rout;