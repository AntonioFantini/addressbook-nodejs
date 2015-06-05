// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var executor = require('./executor/executor.js');
var utils = require('./utils/addressbook_utils');
var operations = require('./executor/operations.js');
var instructionsMessage = 'Please add the operation url param, 0 to sort by date of birth, 1 to sort by name, 2 to sort by sex'

var port = process.env.PORT || 8080;        // set port

// ROUTES 
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    var arg = req.query.operation;
    var retval = null;
    if(utils.checkEmpty(arg) || parseInt(arg) <0 || parseInt(arg)>2){
        retval = instructionsMessage;
    }else if(parseInt(arg) == 0){
        retval = executor.execute(operations.operationOldest);
    }else if (parseInt(arg) == 1){
        retval = executor.execute(operations.operationName);
    }else if (parseInt(arg) == 2){
        retval = executor.execute(operations.operationSex);
    }
    
    res.json(retval);   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/addressbook/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started and listening on port ' + port);