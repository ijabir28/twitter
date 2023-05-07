const router = require('express').Router();

const twitter_controller = require('../controllers/twitter');

router.post('/tweet', twitter_controller.tweet);

module.exports = router;