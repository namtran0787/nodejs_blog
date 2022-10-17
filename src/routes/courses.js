/**
 *  Quản lý những routes liên quan đến courses.
 *  Và cũng sẽ có nhiều route con khác khác nhau...
 */

const express = require('express');
const app = express();
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');
// newsController.index

router.get('/create', coursesController.create);
router.get('/:id/edit', coursesController.edit);
router.put('/:id/', coursesController.update);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);
module.exports = router;
