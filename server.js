const express = require("express")
const path = require("path");
const port =  process.env.PORT || 8000;

const app  = express();

//setup static folder path

app.use(express.static(path.join(__dirname, "Frontend")))

const posts= [
{id: "1", title: "test1", type:"check"},
{id: "2", title: "test2", type:"check"},
{id: "3", title: "test3", type:"check"},
{id: "4", title: "test4", type:"check"}

]

app.get('/api',(req,res) =>{

    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){

        res.json(post.slice(0, limit))
    }
    else{

        res.json(post)

    }

    
})

app.get('/api/:id',(req,res) =>{
    
    const id = req.params.id;
    const post = posts.find(p => p.id === id);

    if(!post){

         res.status(404).json({error: `post is not found and the id is ${id}  `});
    }
    else{

        res.status(200).json(post);
    }
})


app.listen(port, ()=> console.log(`Server is running on port ${port}`));