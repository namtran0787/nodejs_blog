/**
 *  Quản lý những routes liên quan đến news.
 *  Và cũng sẽ có nhiều route con khác khác nhau...
 */

const express = require('express');
const app = express();
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
