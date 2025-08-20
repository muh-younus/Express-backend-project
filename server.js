const express = require("express")
const path = require("path");
const postRoutes = require('./routes/post.js');

const app  = express();

//Routes
app.use('/api/post',postRoutes);

app.listen(8000, ()=> console.log(`Server is running on port 8000`));