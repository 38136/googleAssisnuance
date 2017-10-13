'use strict';

const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

exports.nuancetry= (req, res) => {
    const app = new ActionsSdkApp({
        request: req,
        response: res
    });

    // Create functions to handle requests here

}
console.log('will see');
console.log(exports.nuancetry);

function mainIntent(app) {
    let inputPrompt = app.buildInputPrompt(false,
        'Hi! Say something, and I\'ll repeat it');
    app.ask(inputPrompt);
}
{/*function mainIntent (app) {
  let inputPrompt = app.buildInputPrompt(false, 'Hi, I\'m Do It All. You can ask to do this or that. What would you like to do?');
  app.ask(inputPrompt);
}*/}
function respond(app) {
    let inputPrompt = app.buildInputPrompt(false,
        'Hi! Say something, and I\'ll repeat it.');
    app.ask(inputPrompt);
}
let actionMap = new Map();
actionMap.set(app.StandardIntents.MAIN, mainIntent);
actionMap.set(app.StandardIntents.TEXT, respond);

//add more intents to the map


app.handleRequest(actionMap);