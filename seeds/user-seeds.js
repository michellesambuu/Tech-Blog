const { User } = require('../models');

const userData =[ 
    {
        id:1,
        username:'Michelle',
        password: " My091508"
    },
    {
        id:1,
        username:'Pat',
        password: " My0915"
    },
    {
        id:1,
        username:'Jen',
        password: " My1508"
    },
    {
        id:1,
        username:'Adam',
        password: " My108"
    },
]
const seedUser = () => User.bulkCreate(userData,{
    individualHooks:true,
    returning:true
  });
  
  module.exports = seedUser;
