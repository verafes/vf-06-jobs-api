require('dotenv').config();
require('express-async-errors');
require('dotenv').config();

const express = require('express');
const app = express();
const connectDb = require('./db/connect');
const storiesRouter = require('./routes/stories');
const authRouter = require('./routes/auth');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.get('/', (req, res) => {
  res.send('Stories api');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/stories', storiesRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
