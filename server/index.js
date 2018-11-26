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


// 75.1 :Handle production
if (process.env.NODE_ENV === 'production') {
    // 75.2:  Static folder
    app.use(express.static(__dirname + '/public/'));

    // 75.3: Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}


// 17: Define Port No
const port = process.env.PORT || 5005;

// 18: Initalizing Port & listening
app.listen(port, () => console.log(`Server is started at port ${port}`))
