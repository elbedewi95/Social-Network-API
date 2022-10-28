const { User, Thought } = require('../models');

module.exports = {
  // /api/users
  // get all users
  getUsers(req, res) {
    User.find({})
      .select('-__v')
      .then(users => res.json(users))
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
      .then(user => {
        if (!user) {
          res.status(404).json({ message: 'No Users found with this id!' });
          return;
        }
        res.json(user);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create User
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
  },

 
};

