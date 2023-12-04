// var express    = require('express');
// var router 	   = express.Router({mergeParams: true});
// var Campground = require('../models/campground');
// var Comment    = require('../models/comment');
// var middleware = require('../middleware');

// router.get('/new', middleware.isLoggedIn, function(req, res) {
// 	Campground.findById(req.params.id, function(err, campground) {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			res.render('comment/new', {campgrounds: campground});
// 		}
// 	})
// })


// //make comment
// router.post('/', middleware.isLoggedIn, function(req, res) {
// 	Campground.findById(req.params.id, function(err, camp) {
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			Comment.create(req.body.comment, function(err, created) {
// 				if(err) {
// 					console.log(err);
// 					res.redirect('/campgrounds');
// 				} else {
// 					created.author.id = req.user._id;
// 					created.author.username = req.user.username;
// 					created.save();
// 					camp.comments.push(created);
// 					camp.save();
// 					res.redirect('/campgrounds/' + req.params.id);
// 				}
// 			})
// 		}
// 	})
// });

// //edit 
// router.get('/:comment_id/edit', middleware.checkCommentOwnership, function(req, res) {
// 		Comment.findById(req.params.comment_id, function(err, foundComment) {
// 			if(err){
// 				res.redirect('back')
// 			} else {
// 				res.render('comment/edit', {campground_id: req.params.id, comment: foundComment})
// 			}
// 		})
// 	});

// //update
// router.put('/:comment_id', function(req, res){
// 	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, {useFindAndModify: false}, function(err, updatedComment){
// 		if(err){
// 		res.redirect('back')
// 		} else {
// 		res.redirect('/campgrounds/' + req.params.id)
// 		}
// 	});
// });

// //Destroy
// router.delete('/:comment_id', middleware.checkCommentOwnership, function(req, res){
// 	Comment.findByIdAndRemove(req.params.comment_id, {useFindAndModify: false}, function(err, deletedComment){
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			res.redirect('back')
// 		}
// 	})
// });

// module.exports = router;