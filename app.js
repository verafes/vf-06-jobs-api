require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

//Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

const storiesRouter = require("./routes/stories");
const authRouter = require("./routes/auth");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages
app.set("trust proxy", 1);

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.get("/", (req, res) => {
  console.log("Client IP:", req.ip);
  res.send("<h1>Stories API</h1><a href='/api-docs'>Documentation</a>");
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/stories", authenticateUser, storiesRouter);

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
