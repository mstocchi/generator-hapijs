'use strict';

const Model = require('objection').Model;

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '192.168.56.101',
        user : 'kkadx',
        password : 'kkadx',
        database : 'kkadx'
    }
});

Model.knex(knex);

module.exports = {
    Model: Model
};
