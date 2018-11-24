// 13: Import express, bodyParser, cors
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

// 14: Initalize the app using express
const app = express();

// 15: Use Middleware body-parser in app
app.use(bodyParser.json());
// 16: Use Middleware cors in app
app.use(cors());

// 28: Import posts
const posts = require('./routes/api/posts');
// 29: Use posts in app
app.use('/api/posts', posts);


// 17: Define Port No
const port = process.env.PORT || 5005;

// 18: Initalizing Port & listening
app.listen(port, () => console.log(`Server is started at port ${port}`))
