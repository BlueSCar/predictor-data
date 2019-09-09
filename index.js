const amqplib = require('amqplib');
const bluebird = require('bluebird');
const dotenv = require('dotenv');
const pgp = require('pg-promise');

const dbConfig = require('./lib/database');
const rabbitConfig = require('./lib/rabbit');
const consumersConfig = require('./lib/consumers');

(async() => {
    dotenv.config();

    const db = dbConfig(bluebird, pgp);
    const rabbit = await rabbitConfig(amqplib);

    await consumersConfig(rabbit.channel);
})().catch(err => {
    console.error(err);
});