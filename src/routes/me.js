/**
 *  Quản lý những routes liên quan đến me.
 *  Và cũng sẽ có nhiều route con khác khác nhau...
 */

const express = require('express');
const app = express();
const router = express.Router();

const meController = require('../app/controllers/MeController');
// newsController.index

router.get('/stored/courses', meController.storedCourses);

module.exports = router;
