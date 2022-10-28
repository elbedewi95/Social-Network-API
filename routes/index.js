const router = require('express').Router();

const apiRoutes = require('./api');

// add "/api" to all of the api routes in api folder
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('Uh oh! you should not be here!!');
});

module.exports = router;