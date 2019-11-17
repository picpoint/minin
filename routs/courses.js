const {Router} = require('express');
const Course = require('../models/courseModel');
const rout = Router();


rout.get('/', async (req, res) => {
  const courses = await Course.getAll();
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

  const course = await Course.getById(req.params.id);

  res.render('course-edit', {
    title: `Редактировать ${course.title}`,
    course
  });

});


rout.post('/edit', async (req, res) => {
  await Course.update(req.body);
  res.redirect('/courses');
});


rout.get('/:id', async (req, res) => {
  const course = await Course.getById(req.params.id);
  res.render('course', {
    layout: 'empty',
    title: `Курс ${course.title}`,
    course
  });
});


module.exports = rout;
  