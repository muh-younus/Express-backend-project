const express = require("express")
const path = require("path");
const port =  process.env.PORT || 8000;

const app  = express();

//setup static folder path

app.use(express.static(path.join(__dirname, "Frontend")))

const post= [
{id: "1", title: "test1", type:"check"},
{id: "2", title: "test2", type:"check"},
{id: "3", title: "test3", type:"check"},
{id: "4", title: "test4", type:"check"}

]

app.get('/api',(req,res) =>{

    res.json(post)
})

app.get('/api/:id',(req,res) =>{
    
    const id = req.params.id;
    res.json(post.find(p => p.id === id));
})


app.listen(port, ()=> console.log(`Server is running on port ${port}`));