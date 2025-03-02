# Discord Bot Experiment

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a personal discord bot that I am playing with.  I have integrated OpenAI into this bot so that it can reply to me.  Currently its use is pretty conversational.  I've also created a digital dice roller that can roll a specified number of whatever sided dice that a user can specify.  

## Table of Contents


* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
 

## <a name="Installation"></a>Installation

This project requires Node.js.  Download the zip file and run `npm install` to install dependencies.  Rename .env.EXAMPLE to .env and fill in the missing environment variables. TOKEN is generated when you create a bot in discord's developer portal.  You can only view this once when it it created, if you don't copy it then you will have to generate another one.  CLIENT_ID is your APPLICATION ID on the general tab of your developer portal.  GUILD_ID can be retrieved by turning on dev tools in the discord app, right clicking the server name at the top of the screen and clicking 'copy server id'.  Then run `npm run deploy` to populate slash commands.  After that it should be working!  NOTE: You only have to provide an OPEN_AI_KEY if you want to use chatGPT by @ing the bot.

## <a name="Usage"></a>Usage

run `npm start` from the command line to spin up the bot service.  In discord, use `/roll <dice>` to a number of dice. `@ <bot's name> <chatGPT prompt>` will have your bot reply with a chatGPT message.  It is currently set to be a Fact Checker, but you can change this by altering the developer role content in events/messageCreation.

## <a name="license"></a>License

  [MIT](https://opensource.org/licenses/MIT)

## <a name="contributing"></a>Contributing

If you wish to contribute, please follow these [guidelines](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).

## <a name="tests"></a>Tests

Tests go in here.

## <a name="questions"></a>Questions

If you have questions you can reach me at me@joshhensley.com. Add me on [Github](github.com/josh-hensley).
