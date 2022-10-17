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
    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id, (err, course) => {
            res.render('courses/edit', { course: mongooseToObject(course) });
        });
    }
    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body, (err, course) => {
            res.redirect('/me/stored/courses');
        });
    }
    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save((err) => {
            if (err) return handleError(err);
            res.redirect('/');
        });
    }
}

module.exports = new CourseController();

// exports cái gì thì require cái đó
