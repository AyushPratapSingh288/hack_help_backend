const express = require('express')
const cookieParser = require('cookie-parser')
const db = require('./config/mongoose-connection');
const userRouter = require('./routes/userRouter');
const logOut = require('./routes/logOut')

const mentorRouter = require('./routes/mentorRouter');
require("dotenv").config();
const cors = require('cors');
const app= express() ;

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    })
)
app.use(flash());
app.use("/user", userRouter);
app.use("/mentor", mentorRouter);
app.use("logout", logOut);

app.get('/',(req,res)=>{
    res.send('hyy')
})

app.listen(8080);