const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    /**
     *  Cấu hình route new advanced
     */
    // app.get('/news', (req, res) => {
    //     console.log(req.query.q);
    //     res.render('news');
    // });
    app.use('/news', newsRouter)
    
    app.use('/', siteRouter)


    /**
     * Query parameter - req.query
     * Form Data - req.body
     */

}

module.exports = route;