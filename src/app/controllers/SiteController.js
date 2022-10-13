const Course = require('../models/Courses');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((courses) => courses.toObject());
                res.render('home', { courses });
            }) // Promises
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
