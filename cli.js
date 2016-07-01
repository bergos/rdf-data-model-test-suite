#!/usr/bin/env node

var path = require('path')
var Mocha = require('mocha')

var mocha = new Mocha()

global.rdf = require(path.join(process.cwd(), process.argv[2]))

mocha
  .addFile(path.join(__dirname, 'test/default-graph.js'))
  .addFile(path.join(__dirname, 'test/blank-node.js'))
  .addFile(path.join(__dirname, 'test/literal.js'))
  .addFile(path.join(__dirname, 'test/named-node.js'))
  .addFile(path.join(__dirname, 'test/quad.js'))
  .addFile(path.join(__dirname, 'test/variable.js'))
  .run(function (failures) {
    process.on('exit', function () {
      process.exit(failures)
    })
  })
