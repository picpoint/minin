const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.port || 4000;
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});


app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home page'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});



app.listen(port, () => {
  console.log(`---server starting on port ${port}---`);
});