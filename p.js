var bluebird = require('bluebird');
var _ = require('lodash');
//bluebird.longStackTraces();

module.exports = {
    Promise: bluebird.Promise, // ES6-style, i.e. `new Promise(function(resolve, reject){ ... })`
    defer: bluebird.defer,
    when: bluebird.resolve,
    resolve: bluebird.resolve,
    reject: bluebird.reject,
    all: bluebird.all,
    each: bluebird.each,
    map: function(list, fn, opts) {
        var o = _.extend({concurrency: 1}, opts);
        return bluebird.map(list, fn, o);
    },
    mapAsync: function(list, fn, opts) {
        var o = _.extend({concurrency: 5}, opts);
        return bluebird.map(list, fn, o);
    },
    isPromise: function(object) { return !!object && typeof object === 'object' && typeof object.then === "function"; },
    promisify: bluebird.promisify, // convert a Node-style function to use promises; equivalent to Q.nbind
};
