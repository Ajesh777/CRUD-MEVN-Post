// 13: Import express, bodyParser, cors
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

// 14: Initalize the app using express
const app = express();

// 15: Middleware
app.use(bodyParser.json());
app.use(cors());

// 16: Import posts
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);


// 17: Define Port No
const port = Process.env.PORT || 5000;

// 18: Initalizing Port & listening
app.listen(port, () => console.log(`Server is started at port ${port}`))
