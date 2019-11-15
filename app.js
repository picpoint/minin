const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.port || 4000;
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});
const routIndex = require('./routs/home');
const routAdd = require('./routs/add');
const routCourses = require('./routs/courses');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
//app.use(bodyParser);


app.use('/courses', routCourses);
app.use('/add', routAdd);
app.use('/', routIndex);





app.listen(port, () => {
  console.log(`---server starting on port ${port}---`);
});