const express = require("express");
const connectDb = require("./config/db_connection");
const errorHandler = require("./middleware/error_handler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.port || 8080;

app.use(express.json());
app.use("/api/conversations", require("./routes/conversation_routes"));
// app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
