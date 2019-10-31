require('dotenv').config();
const Twitter = require('twitter');

const {
	API_KEY: consumer_key,
	API_SECRET: consumer_secret,
	ACCESS_TOKEN: access_token_key,
	ACCESS_SECRET: access_token_secret,
} = process.env;


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

async function main() {
    try {
        const res = await follow('atlima1298129rcher');
        console.log(res);
    } catch (e) {
        console.error(e);
    }
}

//main();

module.exports = {
    follow,
    like,
    retweet,
};