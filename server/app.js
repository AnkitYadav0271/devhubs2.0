import express from "express";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js"
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectRedis } from "./database/redisConfig.js";
import { errorHandler } from "./middleware/error/errorHandlerMiddleware.js";
import { connectMongoDB } from './database/dbConfig.js';
import projectListingRouter from './routes/ProjectListingRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
configDotenv();

//*_______________Middlewares starts here ________________//
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  cors({
    origin: `http://localhost:5173`,
    credentials: true,
  })
);

//*_______________Middlewares ends here ________________//
//?-------------------------------------------------------------
//*_______________Routes starts here ________________//

app.use("/api", userRouter);
app.use("/api/auth",authRouter);
app.get("/", (req, res) => {
  res.send("server is working");
});

//*__________Centralized Error Handler Middleware starts here___________//

app.use(errorHandler);

//*__________Centralized Error Handler Middleware ends here___________//



app.listen(PORT, () => {
  connectRedis();
  connectMongoDB();
  console.log(`server is running on localhost:${PORT}`);
});
