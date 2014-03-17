#!/usr/bin/env node
/**
 * make JSON from the command line
 */

var autocast = require('autocast');
var strsplit = require('strsplit');

var args = process.argv.slice(2);
var type = args.shift();

var data;
switch (type) {
  case 'object':
    data = {};
    args.forEach(function(arg) {
      var _s = strsplit(arg, '=', 2);
      var keys = _s[0].split('.');

      var o = data;
      for (var i = 0; i < keys.length - 1; i++) {
        var key = keys[i];
        o[key] = o[key] || {};
        o = o[key];
      }
      o[keys[keys.length - 1]] = autocast(_s[1]);
    });
    break;
  case 'array':
    data = args.map(function(a) { return autocast(a); });
    break;
  case 'string':
    data = args.join(' ');
    break;
  default:
    data = null;
    break;
}

console.log(JSON.stringify(data, null, 2));
