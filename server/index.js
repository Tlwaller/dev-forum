require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
})

//auth endpoints
app.get('/auth/user', authController.getUser);
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);

//posts endpoints
app.get('/api/topics', postController.topics);
app.get('/api/posts/:topicId', postController.posts);
app.post('/api/posts/', postController.addPost);
// app.delete('/api/posts', postController.deletePost);

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));