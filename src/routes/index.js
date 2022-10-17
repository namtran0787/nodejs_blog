const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    /**
     *  Cấu hình route new advanced
     */
    // app.get('/news', (req, res) => {
    //     console.log(req.query.q);
    //     res.render('news');
    // });
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);

    /**
     * Query parameter - req.query
     * Form Data - req.body
     */
}

module.exports = route;
