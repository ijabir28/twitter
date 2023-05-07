const express = require('express');
const app = express();

const twitter_router = require('./routes/twitter');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/twitter', twitter_router);

app.get('/api', function (req, res) {
    res.status(200).json('API');
})

const listener = app.listen(process.env.PORT || 3030, () => {
    console.log('Listening on ' + `http://localhost:${listener.address().port}/api`);
});
