const {Router} = require('express');
const rout = Router();


rout.get('/', (req, res) => {
  res.render('add', {
    title: 'Добаить курс',
    isAdd: true
  });
});

rout.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = rout;
