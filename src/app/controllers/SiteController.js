const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // Course.find({}, function(err, courses){
        //     if(!err) {
        //         res.json(courses);
        //     } else {                                // Callbacks
        //         next(err);
        //     }
        // });

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// exports cái gì thì require cái đó
