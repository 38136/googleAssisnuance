'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
var express = require('express');
var expressApp = express();
var bodyParser = require('body-parser');
console.log('will see');

exports.nuancetry = (req, res) => {
    const app = new ActionsSdkApp({
        request: req,
        response: res
    });

    // Create functions to handle requests here
 function mainIntent(app) {
        let inputPrompt = app.buildInputPrompt(false,
            'Hi! Say something, and I\'ll repeat it');
        app.ask(inputPrompt);
    } 
    function respond(app) {
        let inputPrompt = app.buildInputPrompt(false,
            'Hi! Say something, and I\'ll repeat it.');
        app.ask(inputPrompt);
    }
    let actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, mainIntent);
    actionMap.set(app.StandardIntents.TEXT, res);

    //add more intents to the map
    app.handleRequest(actionMap);
}
  

   

expressApp.use(bodyParser.json());
expressApp.post('/', function(request,respond)
{

});
expressApp.get('/', function(request,respond)
{
    respond.send("succes");
});

expressApp.listen(3000);