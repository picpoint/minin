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
  //let course = new Course(req.body.title, req.body.price, req.body.img);
 
  const course = new Course({
    title: req.body.title,
    price: req.body.price,
    img: req.body.img
  });

  try {
    await course.save();  
    res.redirect('/courses');
  } catch (err) {
    console.log(`***ERR TO SAVE IN BD ${err.message}***`);
  }
  
});

module.exports = rout;
