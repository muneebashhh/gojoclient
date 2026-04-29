const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const userRouter = require("./src/routes/userRoutes");
const connect = require("./src/config/connection");

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/users", userRouter);

const port = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();