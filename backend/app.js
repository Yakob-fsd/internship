const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger =require('morgan');
const formidable = require('formidable');
const fs = require('fs');


const usersRouter = require('./routes/users');
const uploadsRouter = require('./routes/uploads');
const cors = require('cors');
const app = express();

app.use(cors({
    origin:'http://localhost:4200',
    credentials : true
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/internship2');

//passport
const passport = require('passport');
const session =require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    name:'myname.sid',
    resave: false,
    saveUninitialized:false,
    secret:'secret',
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/internship2' })
}));

require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

//view engine setup
app.set('view engine','hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/users',usersRouter);
app.use('/uploads',uploadsRouter);

//catch and forward to error handler
app.use(function(req,res,next){
    next(createError(404));
});

app.listen(3000,function(){
    console.log("Listening on port 3000");
});