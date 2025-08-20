const express = require('express')
const router = require.Router();

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

  let id = parseInt(req.params.id); //req.params.id;
  const post1 = posts.find((item) => item.id === id);

  if (!post1) {
    res.status(404).json({ message: `A port with the id of ${id} was not found` })
  } else {
    res.status(200).json(post1)
  }
})

module.exports = router;