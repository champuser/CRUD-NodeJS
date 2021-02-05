const express = require('express');

const router = express.Router();
const Post = require('../models/Post');       // Import the Post from models


// Get all the posts

router.get('/',async(req,res)=>{        // changing the get request by async
    // res.send('We are on posts')

    try{
        // const posts = await Post.find();      // for getting all the post request from the database
                                              // also we can set the limit of post get from the database
                                              // Post.find using from mongoose
         const posts = await Post.find({}).sort({created_at : -1} ).limit(0);                                     
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

router.get('/specefic',(req,res)=>{
    res.send('Specific Port');
});


// Submit a Post

router.post('/',async(req,res)=>{
   // console.log(req.body);     // req.body is used for accessing the thing from body
    // req.body will not automatically post the thing that's y we use body-parser



     const post = new Post({
         title: req.body.title,
         description: req.body.description
     });

    //  post.save()      // save the post
    //   //.exec()      // to return 
    //   //
    //   .then(data=>{
    //       res.status(200).json(data);
    //   })
    //   .catch(err =>{
    //       res.status(404).json({message:err});
    //   });

   try{                                              // use async & await
    const postSave = await post.save();
    res.json(postSave);
   }catch(err){
       res.json({message:err});

   }

});


// Get request using Specific port

router.get('/:postId',async(req,res)=> {
   // console.log(req.params.postId);      // dynammic parameters for postId
   try{
   const post=await Post.findById(req.params.postId);
   res.json(post);

   }catch(err){

    res.json({message:err});
   }
});


//    Delete Post

router.delete('/:postId',async(req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }

});


// update using patch request

router.patch('/:postId',async(req,res)=>{
    try{

         const updatedPost = await Post.updateOne({_id:req.params.postId},
            {$set: {title:req.body.title}});
            res.json(updatedPost);

    }catch(err){
        res.json({message:err});
    }

})
module.exports = router;