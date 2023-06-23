const { Comment } = require('../models');

const commentData =[ 
    {
        id:1,
        body: " love the best selling books detail",
        userId: 4,
        postId: 1
    },
    {
        id:2,
        body: "easy to follow the recipe. it is really handy.",
        userId: 3,
        postId: 2
    },
    {
        id:3,
        body: "it is helpful to travel by car",
        userId: 1,
        postId: 3
    },
    {
        id:4,
        body: "it helps me to be better mom",
        userId: 2,
        postId: 4
    },
    
]
const seedComment = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComment;