const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /courses/store
    storedCourses(req, res, next) {
        Course.find({}, (err, courses) => {
            res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses),
            });
        });
    }
}

module.exports = new MeController();

// exports cái gì thì require cái đó
