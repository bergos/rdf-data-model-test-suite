# rdf-data-model-test-suite

Test suite for the [RDFJS Data Model](https://github.com/rdfjs/representation-task-force/).

## Usage

### Command Line

The `rdf-data-model-test-suite` (symlink to `cli.js`) script can be used to test packages in the command line.
The package, that should be tested, must be given as parameter.

This will run the tests on the `rdf-data-model` package:

     rdf-data-model-test-suite ../rdf-data-model/

### Mocha

The tests can be added your own Mocha tests with the following lines:

    var rdf = require('..')

    require('rdf-data-model-test-suite')(rdf)
