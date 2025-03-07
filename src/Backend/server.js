const port = 3000;
import express from 'express';
const app = express();
const myLogger = function (req, res, next) {
    console.log(`Hi I'm a middleware`);
    next();
}
app.use(myLogger)
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
// app.get('/users/:id', function (req, res) {
//     const userId = parseInt(req.params.id);
//     const userPosts = posts.filter (post => post.userId === userId);
//     res.json(userPosts);
//   });

app.use('/app', express.static('public'));

app.all('*', (_req, res) => {
    res.redirect('/');
  });

app.listen(port, () => console.log(`Example app listening on ${port}!`));