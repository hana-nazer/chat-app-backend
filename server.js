const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const connectDB = require("./config/db");
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started");
});
