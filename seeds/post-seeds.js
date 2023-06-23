const { Post } = require('../models');

const postData =[ 
    {
        id:1,
        title:'Best read',
        body: "About best-seller books",
        userId: 1
    },
    {
        id:2,
        title:'Cook book',
        body: "About best-seller cook books",
        userId: 4
    },
    {
        id:3,
        title:'Road travel',
        body: "Road travel tips",
        userId: 2
    },
    {
        id:4,
        title:'Kids club',
        body: "About kids",
        userId: 3
    },
    
]
const seedPost = () => Post.bulkCreate(postData);
  
  module.exports = seedPost;
