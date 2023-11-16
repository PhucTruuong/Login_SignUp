import express from "express";
import dotenv from "dotenv";
dotenv.config();
const cors = require('cors');
import cookieParser from "cookie-parser";
const app = express();
import authRouter from './routes/authRouter';
import mongoose from 'mongoose';

//database connection
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
    }
  }
}

//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('database connected'))
  .catch((error) => console.log('database not connected', error))

app.use('/', authRouter);

app.listen(8000, () => {
  console.log("Example app listening on port");
});
