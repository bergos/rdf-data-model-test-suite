var defaultGraph = require('./test/default-graph')
var blankNode = require('./test/blank-node')
var literal = require('./test/literal')
var namedNode = require('./test/named-node')
var quad = require('./test/quad')
var variable = require('./test/variable')

function runTests (rdf) {
  defaultGraph(rdf)
  blankNode(rdf)
  literal(rdf)
  namedNode(rdf)
  quad(rdf)
  variable(rdf)
}

module.exports = runTests
