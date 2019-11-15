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

module.exports = rout;
  