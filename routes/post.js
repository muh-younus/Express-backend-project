import express from "express";
const router = express.Router();

const posts= [
{id: "1", title: "test1", type:"check"},
{id: "2", title: "test2", type:"check"},
{id: "3", title: "test3", type:"check"},
{id: "4", title: "test4", type:"check"}

]


router.get('/',(req,res) =>{

    // console.log("API called");
    let limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){

        res.status(200).json(posts.slice(0, limit))
    }else{

        res.status(200).json(posts)
    }
  
})

//now we get the data from id

router.get('/:id', (req, res) => {
  console.log('req.params.id:', req.params.id,typeof req.params.id);
  console.log('data:', posts);

  let id = req.params.id; //req.params.id;
    const post1 = posts.find((item) => item.id === id);
    console.log('post1:', post1);
    res.status(200).json(post1);
})

//create new post request

router.post('/',(req,res) =>{

    const newPost = {

        id: posts.length +1,
        title: req.body.title,
        type: req.body.type
    }
    posts.push(newPost);
    res.status(201).json(posts);
})

export default router;