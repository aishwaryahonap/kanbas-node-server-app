import express from 'express'
import "dotenv/config";
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import mongoose from "mongoose";
const CONNECTION_STRING ='mongodb+srv://aishwaryahonap:aishwaryahonap1861@cluster0.gznzevi.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect("CONNECTION_STRING");
import UserRoutes from "./users/routes.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import session from "express-session";
const app = express()

app.use(
    cors({
      credentials: true,
    //   origin: "http://localhost:3000",
    origin: process.env.FRONTEND_URL
    })
   );

// const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
//   };
// app.use(
//     session(sessionOptions)
// );
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));
  
  
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
UserRoutes(app);

// app.listen(4000)
app.listen(process.env.PORT || 4000);