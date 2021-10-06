const express = require('express');
const router = express.Router();
const Upload = require('../models/upload');

router.post('/upload',function(req,res,next){
    addToDB(req,res);
});

async function addToDB(req,res){
    
    var upload = new Upload({
        videoname: req.body.videoname,
        tagline : req.body.tagline,
        location : req.body.location,
        genre : req.body.genre,
        description : req.body.description,
        thumbUrl : req.body.thumbUrl,
        videoUrl : req.body.videoUrl,
        creation_dt : Date.now()
    });
    try{
        doc = await upload.save();
        return res.status(201).json(doc);
    }
    catch(err){
        return res.status(501).json(err);
    }
}

router.get('/videos',function(req,res){
    Upload.find()
    .then(function(videos){
        res.send(videos)
    })
})

module.exports = router;