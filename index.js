const express = require('express');
const cors = require('cors');
const connectDatabase = require('./database/index');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const categoryRouter = require('./routes/category');
const likesRouter = require('./routes/like');
const commentRouter = require('./routes/comment');

const app = express()

app.use(express.json())
app.use(cors())         // Prevent error Cross-Origin-Resource-Sharing while using with react app

app.use(logger);

app.use(userRouter);
app.use(blogRouter);
app.use(categoryRouter);
app.use(likesRouter);
app.use(commentRouter);

function logger(req, res, next) {
    console.info(new Date(), req.method, req.path);

    next();
}

connectDatabase().then(() => {
    app.listen(3001, () => {
        console.log("Server running at http://localhost:3001")
    })
})

