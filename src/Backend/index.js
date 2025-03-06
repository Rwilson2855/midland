const port = 3000;
const express = require('express');
const app = express();
const posts = require('./posts.json')
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get('/users/:id', function (req, res) {
    const userId = parseInt(req.params.id);
    const userPosts = posts.filter (post => post.userId === userId);
    res.json(userPosts);
  });
app.all('*', (_req, res) => {
    res.redirect('/');
});



app.listen(port, () => console.log(`Example app listening on ${port}!`));