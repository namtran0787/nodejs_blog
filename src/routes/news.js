/**
 *  Quản lý những routes liên quan đến news.
 *  Và cũng sẽ có nhiều route con khác khác nhau...
 */

const express = require('express');
const app = express();
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// newsController.index

router.get('/:slug', newsController.show);

router.get('/', newsController.index);
module.exports = router;
