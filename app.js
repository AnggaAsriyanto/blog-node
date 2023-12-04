const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/home')
});

app.get('/home', (req, res) => {
    res.render('index')
});

app.get('/home/post/all/populer', (req, res) => {
    res.render('popularpost')
});

app.get('/home/post/all/terbaru', (req, res) => {
    res.render('newpost')
});

app.get('/home/post/all/judul', (req, res) => {
    res.render('titlepost')
});

app.get('/home/post/category/:value', (req, res) => {
    const value = req.params.value;
    if(value === 'news') {
        res.render('category')
    } else if(value === 'chart') {
        res.render('category')
    } else if(value === 'review') {
        res.render('category')
    } else {
        res.redirect('back')
    }
})

// profile & login
app.get('/home/signup', (req, res) => {
    res.render('signup')
});

app.get('/home/login', (req, res) => {
    res.render('login')
});

app.get('/home/profile', (req, res) => {
    res.render('profile')
});

app.get('/home/profile/edit', (req, res) => {
    res.render('edit')
});

//post article
app.get('/home/post/article/:id', (req, res) => {
    res.render('post')
});

app.get('/home/post/new', (req, res) => {
    res.render('post/new')
});

app.get('/home/post/edit/:id', (req, res) => {
    res.render('post/edit')
});

app.get('*', (req, res) => {
    res.send("This page is doesn't exist, please check your url")
});

app.listen(3001, () => console.log('Server blogs has started on port 3001'))