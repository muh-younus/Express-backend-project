import express from "express";
import path from "path";
import postRoutes from "./routes/post.js";


const app  = express();

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/post',postRoutes);

app.listen(8000, ()=> console.log(`Server is running on port 8000`));