const {Router} = require('express');
const rout = Router();


rout.get('/', (req, res) => {
  res.render('courses', {
    title: 'Курсы',
    isCourses: true
  });
});

module.exports = rout;
  