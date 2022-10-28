const { User, Thought } = require('../models');

module.exports = {
  // /api/users
  // get all users
  getUsers(req, res) {
    User.find({})
      .select('-__v')
      .then(Users => res.json(Users))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

 
};

