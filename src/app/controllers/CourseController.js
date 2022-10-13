const Course = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // using callback
        Course.findOne({ slug: req.params.slug }, (err, course) => {
            res.render('courses/show', { course: mongooseToObject(course) });
        });

        // USING promises but in docs didn't use promises, so I using callback above

        // Course.findOne({ slug: req.params.slug })
        //     .then(course => {
        //         res.json(course);
        //     })
        //     .catch(next);
    }
}

module.exports = new CourseController();

// exports cái gì thì require cái đó
