const {Router} = require('express');
const Course = require('../models/courseModel');
const rout = Router();


rout.get('/', async (req, res) => {
  const courses = await Course.find();
  res.render('courses', {
    title: 'Курсы',
    isCourses: true,
    courses
  });
});


rout.get('/:id/edit', async (req, res) => {
  if(!req.query.allow) {
    return res.redirect('/');
  }

  const course = await Course.findById(req.params.id);

  res.render('course-edit', {
    title: `Редактировать ${course.title}`,
    course
  });

});


rout.post('/edit', async (req, res) => {
  const {id} = req.body;
  delete req.body.id;
  await Course.findByIdAndUpdate(id, req.body);
  res.redirect('/courses');
});


rout.post('/remove', async (req, res) => {
  
  try {
    await Course.deleteOne({
      _id: req.body.id
    });  
    res.redirect('/courses');
  } catch (err) {
    console.log(`***ERR TO DELETE COURSE ${err.message}***`);
  }
  
});


rout.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.render('course', {
    layout: 'empty',
    title: `Курс ${course.title}`,
    course
  });
});


module.exports = rout;
  