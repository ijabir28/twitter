require('dotenv').config();

const {TwitterApi} = require('twitter-api-v2');

const userClient = new TwitterApi({
    appKey: process.env.CONSUMER_KEY,
    appSecret: process.env.CONSUMER_SECRET,
    // Following access tokens are not required if you are
    // at part 1 of user-auth process (ask for a request token)
    // or if you want a app-only client (see below)
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
});

exports.tweet = async function ({content}){
    return await
        userClient.v2.tweet(content).then((val) => {
            console.log(val.data.id);
            console.log("success");
            return {message: 'success'}
        }).catch((err) => {
            console.log(err)
        })
}

