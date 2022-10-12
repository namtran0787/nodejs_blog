const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes/index')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));  // Middleware urlencoded
app.use(express.json());

// XMLHttpRequest, fetch, axios

// HTTP logger, Hiển thị console.log
// app.use(morgan('combined'));


// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

// 127.0.0.1 ~ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});