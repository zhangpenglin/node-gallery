var gallery = require('../model/gallery');
var config = require('../config.js');
var path = require('path');
var fs = require('fs');
var async = require('async');
var dir = config.gallery_dir;
exports.add = function(req, res, next) {
	fs.readdir(dir, function(err, files) {
		//		console.log("fs" + files);
		//		console.log("as" + async);
		async.each(files, function(file, callback) {
			var fullpath = path.join(dir + file);
			fs.stat(fullpath, function(err, stat) {
				//				console.log("fp" + fullpath);
				//				console.log(stat);
				if (stat.isDirectory()) {
					fs.readdir(fullpath, function(err, files1) {
						//						console.log("fullpath" + fullpath);
						//						console.log("files1" + files1);
						var doc = new gallery({
							name: file,
							imgs: files1
						});
						doc.save();
					})
				}
			})
		}, function(err) {
			console.log(err)
		});
	});
};
exports.show = function(req, res, next) {
	res.render('gallery', {})
};
exports.getTags = function(req, res, next) {
	console.log("213");
	var o = {};
	o.map = function() {
		this.tags.forEach(function(z) { //z即是具体的某个tag了
			emit(z.name, 1); //对某个tag出现一次就计数一次
		});
	}
	o.reduce = function(k, values) {
		var total = 0;
		for (var i = 0; i < values.length; i++) {
			total += values[i];
		}
		return total;
	}
	gallery.mapReduce(o, function(err, results) {
		if (err) {
			console.log("mapReduce err:" + err);
		}
		res.json(results);
	})
}
exports.search = function(req, res, next) {
	var num = req.params.num;
	console.log(gallery.find({}).tags);
	gallery.find({tags:[name]}).limit(20).skip(num * 20).exec(function(err, result) {

		res.json(result);
		console.log(result);
	});
};
exports.all = function(req, res, next) {
	var num = req.params.num;
	gallery.find({}).limit(20).skip(num * 20).exec(function(err, result) {

		res.json(result);
		console.log(result);
	});
};
exports.get = function(req, res, next) {
	console.log("get")
};
exports.post = function(req, res, next) {
	console.log("post")
};
exports.update = function(req, res, next) {
	console.log("put");
	console.log(req.params.id);
	console.log(req.body);
	gallery.findByIdAndUpdate(req.params.id, {
		$set: {
			tags: req.body.tags
		}
	}, function(err, result) {
		if (err) {
			res.json(err)
		}
		res.json(result)
	})

};
exports.delete = function(req, res, next) {
	console.log("delete")
};