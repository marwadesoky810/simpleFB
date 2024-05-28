import express, { Router } from 'express';
import connectionDB from './db/connectionDB.js';
import userRouter from './src/modules/users/user.routes.js';
import postsRouter from './src/modules/posts/post.routes.js';
import commentRouter from './src/modules/comments/comment.routes.js';
// &==========================================================================
const app = express()
const port = process.env.port || 3000;
// &===================================================================
app.use(express.json());
connectionDB();
// &===================================================================
app.use("/users",userRouter)
app.use("/posts",postsRouter)
app.use("/comment",commentRouter)

// &====================================================================
app.get('/', (req, res,next) => {
    res.status(404).json({message: 'Hello To My Project'});
})

app.use('*', (req, res,next) => {
    res.status(404).json({message: '404 Not Found'});
})
// &====================================================================
app.listen(port, () =>
     console.log(`Example app listening on port ${port}!`)
)