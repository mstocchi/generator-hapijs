// This is a file generated by the yeoman generator hapijs

/**
 * Unit tests for all the <%= name %> endpoints
 *
 * @type {exports}
 */

var Lab = require('lab');
var server = require('../');

/**
 * All the tests related to tasks
 */
Lab.experiment('Creating <%= name %>', function() {

  Lab.test('should be successful', function (done) {
    var options = {
      method: 'POST',
      url: '/<%= name %>',
      payload: {

      }
    };

    server.inject(options, function (response) {
      var result = response.result;

      Lab.expect(response.statusCode).to.equal(200);

      done();
    });
  });

});

Lab.experiment('Fetching <%= pluralName %>', function() {

  Lab.test('should be successful', function (done) {
    var options = {
      method: 'GET',
      url: '/<%= name %>',
      payload: {

      }
    };

    server.inject(options, function (response) {
      var result = response.result;

      Lab.expect(response.statusCode).to.equal(200);

      done();
    });
  });

});
