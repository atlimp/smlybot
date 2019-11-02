require('dotenv').config();

const express = require('express');
const { follow, like, retweet } = require('./tweet');

const {
	HOST: host = 'localhost',
	PORT: port = 3000,
} = process.env;

const app = express();

/**
 * All endpoints are listening for get requests for simplicity
 */

/**
 * Attemps to follow user.  Sends message if successful, error if unsuccessful.
 */
app.get('/follow/:user', async (req, res) => {
	const { user } = req.params;

	try {
		result = await follow(user);
		res.send(`Started following user:  ${user}\n`);
	} catch (e) {
		console.error(e);
		res.send(`Unexpected error: ${e[0].message}\n`);
	}
});

/**
 * Attemps to like tweet.  Sends message if successful, error if unsuccessful.
 */
app.get('/like/:id', async (req, res) => {
	const { id } = req.params;

	try {
		result = await like(id);
		res.send(`Liked tweet: ${id}\n`);
	} catch (e) {
		console.error(e);
		res.send(`Unexpected error: ${e[0].message}\n`);
	}
});

/**
 * Attemps to retweet tweet.  Sends message if successful, error if unsuccessful.
 */
app.get('/retweet/:id', async (req, res) => {
	const { id } = req.params;

	try {
		result = await retweet(id);
		res.send(`retweeted tweet: ${id}\n`);
	} catch (e) {
		console.error(e);
		res.send(`Unexpected error: ${e[0].message}\n`);
	}
});

app.listen(port, host, () => {
	console.info(`Server running ${host}:${port}`);
});