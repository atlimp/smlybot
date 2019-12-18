# Smiley-Bot

## Introduction
This project is split into two parts.  An API written with NodeJS for interacting with twitter and a shell script for reacting to transactions on the SMLY blockchain.

## Using the bot
The bot is constantly listening to transactions on the blockchain.  You can view its actions on twitter [@smlybot](https://twitter.com/smlybot).

Each transaction needs to the bot needs to have hex encoded data of the following form.

```
OP:arg:(msg)
```

Where OP is the index of the requested operation, arg is either the username or a tweet id and the msg is an optional message when requesting a mention.

The operations are

	1. Follow
	2. Like
	3. Retweet
	4. Mention

For clarity here are some examples.

Follow user @smlybot -> `1:smlybot`  
Like [this tweet](https://twitter.com/smlybot/status/1202608102396301315) -> `2:1202608102396301315`  
Retweet [this tweet](https://twitter.com/smlybot/status/1202608102396301315) -> `3:1202608102396301315`  
Have the bot mention @smlybot with some message -> `4:smlybot:Hello World!`

For ease of use you can use the provided program [getstring](https://github.com/atlimp/smlybot/blob/master/notifier/getstring) which writes the message and encodes it.

An example raw transaction will then be

```
smileycoin-cli createrawtransaction '[{"txid":"f65f559303afbd1b0b5e7a65c5994f9cd077ffe06b374b1a9601a1714123bdfa","vout":1}]' '{"BEK76oMDxttaiZCCsLxzr2Wb2kyKowhkL3":15, "data":"333a31323031393137303233303238323037363137"}'
```

If the bot is unable to send a request to twitter you will be refunded the amount (minus transaction fees).

## Installation
Clone this repository using

```
$ git clone https://github.com/atlimp/smlybot
```

Need to have an installed version of the [SmileyCoin Wallet](https://github.com/tutor-web/smileyCoin), a bash interpreter and a recent version of NodeJS.

## Further instructions

View the respective README's for each section

* [NodeJS section](https://github.com/atlimp/smlybot/tree/master/node)
* [Bash section](https://github.com/atlimp/smlybot/tree/master/notifier)

## Author
Atli Marcher Pálsson - [amp17](mailto:amp17@hi.is) 
