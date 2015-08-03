var express = require('express');
var router = express.Router();
var gallery=require('../controller/gallery')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gallery',gallery.show);
router.get('/gallerys/:num',gallery.search);
router.get('/gallery/add',gallery.add);
router.get('/tags',gallery.getTags);
router.route('/gallery/:id')
.get(gallery.get)
.post(gallery.post)
.put(gallery.update)
.delete(gallery.delete)
module.exports = router;
