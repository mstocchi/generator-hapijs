/**
 * This file just loads all the *routes.js files in any /modules/<subdir>.
 *
 * This allows us to just require the /modules folder and it will load all the *-routes.js files in the subfolders.
 *
 * @type {exports}
 */
'use strict';

const path = require('path');
const fs = require('fs');
const _ = require('underscore');

fs.readdirSync(__dirname).forEach(function(dir) {
	/* If its the current file ignore it */
    if (dir === 'index.js') {return;}

    const currentDir = path.join(__dirname, dir);
    const stat = fs.statSync(currentDir);

	// If we're on a directory
    if (stat && stat.isDirectory()) {

        fs.readdirSync(currentDir).forEach(function(file) {

          // Only process *-test.js files...
            if (file.indexOf('routes.js') >= 0) {

                /* Prepare empty object to store module */
                const mod = {};

                    /* Store module with its name (from filename) */
                mod[path.basename(file, '.js')] = require(path.join(currentDir, file));

                    /* Extend module.exports (in this case - undescore.js, can be any other) */
                _.extend(module.exports, mod);
            }
        });
    }
});
