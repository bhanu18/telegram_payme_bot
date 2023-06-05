const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

dotenv.config({ path: './config.env'});

const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome");
    
});

bot.onText(/\/sendpic/, (msg) => {

    bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg",{caption : "Here we go ! \nThis is just a caption "} );
    
    });

// morgan
app.use(morgan('dev'));

// parse the updates to JSON
app.use(express.json());

//route
app.use('/', require('./route/home.js'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
});

