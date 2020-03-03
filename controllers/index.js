const express = require('express');
const router = express.Router();

let data = require('../data/data.json')

router.get('/', (req, res)=>{
    console.log(data);
    let pageSongs = [];

    data.speakers.forEach((speakerObj)=>{
        pageSongs = pageSongs.concat(speakerObj.Songs)
    })

    console.log(pageSongs);

    res.render('index', {Songs: pageSongs
    
    })
})

module.exports = router