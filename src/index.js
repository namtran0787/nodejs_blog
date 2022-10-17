const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db/index');
// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // Middleware urlencoded
app.use(express.json());
app.use(methodOverride('_method'));

// XMLHttpRequest, fetch, axios

// HTTP logger, Hiển thị console.log
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

// 127.0.0.1 ~ localhost
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
