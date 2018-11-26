// 31: Import Required pkg's: express [for Server Config], mongodb [for db CRUD]
const express = require('express');
const mongodb = require('mongodb');

// 32: Import the Router
const router = express.Router();

// 34: Create db connection
async function loadPostsCollection(params) {
    // 34.1: Go to mlab & create db & copy the connection driver URI,
    const client = await mongodb.MongoClient.connect('mongodb://abc123:123abc@ds157923.mlab.com:57923/mevn_posts', {
        useNewUrlParser: true
    });

    // 34.2: Return Client db info
    return client.db('mevn_posts').collection('posts');
}

// Create/Add/post Posts
// 36: Create Route to Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});


// Read/Get Posts
// 35: Create Route to Get 
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


// Update/put Posts
// 37: Create Route to Update
router.put('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.updateOne(
        {
            _id: new mongodb.ObjectID(req.params.id)
        }, 
        {
            $set: {
                "text": req.body.text
            }
        }
    );
    res.status(201).send();
});


// Delete Posts
// 38: Create Route to Delete
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });
    res.status(200).send();
});
// 39: OVER - Now Go to CrSteps

// 33: Export the Router
module.exports = router;