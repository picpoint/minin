const {Router} = require('express');
const rout = Router();
const Course = require('../models/courseModel');


rout.get('/', (req, res) => {
  res.render('add', {
    title: 'Добаить курс',
    isAdd: true
  });
});

rout.post('/', async (req, res) => {  
  let course = new Course(req.body.title, req.body.price, req.body.img);
  await course.save();
  res.redirect('/courses');
});

module.exports = rout;
