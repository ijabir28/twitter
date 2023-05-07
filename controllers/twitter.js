const twitter_service = require('../services/twitter');

exports.tweet = async function (req, res) {
    const {content} = req.body

    twitter_service.tweet({content})
        .then(function (message) {
            res.status(200).send(message);
        }).catch(function (error) {
        console.error(error);
        res.status(404);
    })
};
