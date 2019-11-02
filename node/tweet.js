require('dotenv').config();
const Twitter = require('twitter');

const {
	API_KEY: consumer_key,
	API_SECRET: consumer_secret,
	ACCESS_TOKEN: access_token_key,
	ACCESS_SECRET: access_token_secret,
} = process.env;

/**
 * Attempts to follow user.  Throws error on failure (e.g. if user does not exits)
 * @param {*twitter username*} user 
 */
async function follow(user) {
    const client = new Twitter({
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret,
    });

	try {
        const res = await client.post('friendships/create', { screen_name: user });
		return res;
	} catch (e) {
        throw e;
	}
}

/**
 * Attempts to like tweet.  Throws error on failure (e.g. if tweet does not exits)
 * @param {*id of tweet*} tweet 
 */
async function like(tweet) {
    const client = new Twitter({
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret,
    });

    try {
        const res = await client.post('favorites/create', { id: tweet });
        return res;
    } catch (e) {
        throw e;
    }
}

/**
 * Attempts to retweet tweet.  Throws error on failure (e.g. if tweet does not exits)
 * @param {*id of tweet*} tweet 
 */
async function retweet(tweet) {
    const client = new Twitter({
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret,
    });

    try {
        const res = await client.post('statuses/retweet', { id: tweet });
        return res;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    follow,
    like,
    retweet,
};