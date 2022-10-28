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
 // get one User by id
 getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .then(User => {
        if (!User) {
          res.status(404).json({ message: 'No Users found with this id!' });
          return;
        }
        res.json(User);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

 
 
};

