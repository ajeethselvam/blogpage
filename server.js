const express = require('express');
const app = express();
const path = require('path');
const { engine } = require('express-handlebars');

app.use(express.static('public/css'));
app.use(express.static("images"));

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', '.handlebars');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render('home', {
        title: 'Blogger',
    });
});

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Blogger - About',  
    });
});

app.get('/create', (req,res) => {
    res.render('create', {
        title: 'Blogger - Create',
    });
});

app.listen(8080, () =>{
    console.log("Server running on port http://localhost:8080");
});