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

 
  // update User by id
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(user => {
        if (!user) {
          res.status(404).json({ message: 'No Users found with this id!' });
          return;
        }
        res.json(user);
      })
      .catch(err => res.json(err));
  },

  //Delete user and his thoughts
  deleteUser(req, res) {
    Thought.deleteMany({ userId: req.params.id })
      .then(() => {
        User.findOneAndDelete({ userId: req.params.id })
          .then(user => {
            if (!user) {
              res.status(404).json({ message: 'No Users found with this id!' });
              return;
            }
            res.json(user);
          });
      })
      .catch(err => res.json(err));
  },

  // /api/users/:userid/friends/:friendId
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No users found with this id' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'No users found with this id' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  }
};

