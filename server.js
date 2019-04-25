const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const postsRouter = require('./routers/posts-router.js');
const usersRouter = require('./routers/users-router.js');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors())

server.use('/api/posts', postsRouter);

server.use('/api/users', usersRouter);
// server.get('/', (req, res) => {
//     res.send('test')
// });

module.exports = server;