/**
 * Hapi.js server.
 *
 * @type {exports}
 */
'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const modules = require('./modules');

// Instantiate the server
const server = new Hapi.Server();
const port = process.env.PORT || 3000;

server.connection({
    host: '127.0.0.1',
    port: port,
    routes: {
        cors: true
    }
});


/**
 * The hapijs plugins that we want to use and their configs
 */
const plugins = [
    Inert,
    Vision,
    {
        register: HapiSwagger,
        options: {
            info : {
                version: '0.1'
            }
        }
    }
];

/**
 * Setup the server with plugins
 */
server.register(plugins, err => {

  // If there is an error on server startup
    if (err) {
        throw err;
    }

  /**
   * Make sure if this script is being required as a module by another script, we don't start the server.
   */
    if (!module.parent) {

      /**
       * Starts the server
       */
        server.start( () => {
            console.log('Hapi server started @', server.info.uri);
        });
    }

});

/**
 * Add all the modules within the modules folder
 */
for (const route in modules) {
    server.route(modules[route]);
}


/**
 * Expose the server's methods when used as a require statement
 *
 * @type {exports.server}
 */
module.exports = server;
