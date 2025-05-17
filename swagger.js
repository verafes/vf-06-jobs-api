const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CTD Jobs API",
      version: "1.0.0",
    },
    servers: [{ url: "https://vf-06-jobs-api.onrender.com" }],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;