require('dotenv').config();
const express = require('express');
const app = express();
const authController = require('./controllers/authController');
const postController = require('./controllers/postController');

const {SERVER_PORT} = process.env;

//auth endpoints
app.get('/auth/user', authController.getUser);
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('auth/logout', authController.logout);

//posts endpoints
app.get('/api/forums', postController.getForums);
app.get('/api/posts/:topic', postController.topics);
app.post('/api/posts/:topic', postController.addPost);
app.delete('/api/posts/:id', postController.deletePost);

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));