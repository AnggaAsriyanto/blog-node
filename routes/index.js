// var express    = require('express');
// var router 	   = express.Router();
// var passport   = require('passport');
// var User 	   = require('../models/user');
// var Campground = require('../models/campground');
// var mongoose   = require('mongoose');
// var middleware = require('../middleware');
// var async 	   = require('async');
// var nodemailer = require('nodemailer');
// var crypto 	   = require('crypto');

// router.get('/', function(req, res) {
// 	res.render('home');
// });

// //register
// router.get('/register', function(req, res) {
// 	res.render('register')
// });

// // register handle
// router.post('/register', function(req, res) {
// 	var newUser = new User({username: req.body.username, email: req.body.email, profile: {PI: req.body.PI}});
// 	User.register(newUser, req.body.password, function(err, user) {
// 		if(err) {
// 			req.flash('error', err.message);
// 			console.log(err);
// 			return res.redirect('/register');
// 		}
// 		passport.authenticate('local')(req, res, function() {
// 			req.flash('success', 'Welcome to Yellcamp ' + user.username);
// 			res.redirect('/campgrounds')
// 		})
// 	})
// });

// //log in
// router.get('/login', function(req, res) {
// 	res.render('login')
// });

// //log in handle
// router.post('/login', passport.authenticate('local', {
// 	successRedirect: '/campgrounds',
// 	failureRedirect: '/login'
// }),function(req, res) {});

// router.get('/logout', function(req, res) {
// 	req.logout();
// 	req.flash('success', 'LOGGED YOU OUT!');
// 	res.redirect('/campgrounds');
// });

// router.get('/profile/:id', function(req, res) {
// 	User.findById(req.params.id).populate('post').exec(function(err, foundUser) {
// 		if(err) {
// 			console.log(err);
// 			res.redirect('back');
// 		} else {
// 			console.log(foundUser);
// 			res.render('profile', {campgrounds: foundUser});
// 		}
// 	})
// });

// //edit profile
// router.get('/profile/:id/edit', middleware.isLoggedIn, function(req, res) {
// 	res.render('edit');
// });

// //update profile
// router.put('/profile', middleware.isLoggedIn, function(req, res) {
// 	var profile = req.body.profile;
// 	var username = req.body.username;
// 	var user = {username: username, profile: profile};
// 	User.findByIdAndUpdate(req.user._id, user, {useFindAndModify: false},function(err, profileUpdate) {
// 		if(err) {
// 			console.log(err);
// 			res.redirect('back');
// 		} else {
// 			res.redirect('/profile/' + req.user._id);
// 		}
// 	})
// });

// //forgot 
// router.get('/forgot', function(req, res) {
// 	res.render('forgot');
// });

// //forgot post
// router.post('/forgot', function(req, res) {
// 	async.waterfall([
// 		function(done) {
// 			crypto.randomBytes(20, function(err, buf) {
// 				var token = buf.toString('hex');
// 				done(err, token);
// 			});
// 		},
// 		function(token, done) {
// 			User.findOne({email: req.body.email}, function(err, user) {
// 				if(!User) {
// 					req.flash('error', 'No account with that email address exists.');
// 					return(res.redirect('/forgot'));
// 				}
				
// 				user.resetPasswordToken = token;
// 				user.resetPasswordExpires = Date.now() + 3600000; //1 hour
				
// 				user.save(function(err) {
// 					done(err, token, user);
// 				});
// 			});
// 		},
// 		function(token, user, done) {
// 			var smtpTransport = nodemailer.createTransport({
// 				service: 'Gmail',
// 				auth: {
// 					user: 'anggawebdev@gmail.com',
// 					pass: process.env.GMAILPW
// 				}
// 			});
// 			var mailOptions = {
// 				to: user.email,
// 				from: 'anggawebdev@gmail.com',
// 				subject: 'Node.js Password Reset',
// 				text: 'You are receiving this because you (or someone else) have'
// 			};
// 			smtpTransport.sendMail(mailOptions, function(err) {
// 				console.log('mail sent');
// 				req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
// 				done(err, 'done');
// 			});
// 		}
// 	], function(err) {
// 		if (err) return next(err);
// 		res.redirect('/forgot');
// 	});
// });

// module.exports = router;