// var express 			  = require('express');
// var app 				  = express();
// var bodyParser 			  = require('body-parser');
// var mongoose			  = require('mongoose');
// var flash				  = require('connect-flash');
// var seedDB 				  = require('./seeds');
// var passport 			  = require('passport');
// var localStrategy 		  = require('passport-local');
// var passportLocalMongoose = require('passport-local-mongoose');
// var User 				  = require('./models/user');
// var methodOverride		  = require('method-override');


// var indexRoutes 	  = require('./routes/index'),
// 	campgroundRoutes  = require('./routes/campground'),
// 	commentRoutes 	  = require('./routes/comment');


// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true );
// mongoose.connect('mongodb://localhost/yell_camp_v11', {useNewUrlParser: true});

// // seedDB();
// var Campground = require('./models/campground');
// var Comment = require('./models/comment');


// app.use(methodOverride('_method'));

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/public'));
// app.set('view engine', 'ejs');

// app.use(require('express-session')({
// 	secret: 'you can do it angga',
// 	resave: false,
// 	saveUninitialized: false,
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new localStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(flash());
// app.use(function(req, res, next) {
// 	res.locals.currentUser = req.user;
// 	res.locals.error	   = req.flash('error');
// 	res.locals.success	   = req.flash('success');
// 	next()
// });

// app.use('/', indexRoutes);
// app.use('/campgrounds', campgroundRoutes);
// app.use('/campgrounds/:id/comments', commentRoutes);

// app.locals.moment = require('moment');

// app.listen(3000, function() {
// 	console.log('Server YellCamp has started!')
// });