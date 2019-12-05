# Smiley-Bot

## Introduction
This is the bash section of the Smiley-Bot.  The `notifier` script can be added to the `smileycoin.conf` in the `walletnotify` section.  The `encode.c` and `decode.c` are utility scripts for encoding and decoding ASCII text into hex.  Only the `decode` program is used by the `notifer`.  The following line should be added to your `smileycoin.conf`.

```
walletnotify=/Path/To/notifier %s
```

## Installation
Compile the `encode.c` and `decode.c` files with your favorite C compiler.  After that you are all set.

## Running the program
You can test the `notifier` script before adding it to your `smileycoin.conf` by giving it a transaction id.
```
$ ./notifier $txid
```
