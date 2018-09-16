'use strict';
const Alexa = require('alexa-sdk');

const APP_ID = undefined;

//Temporary arrays, would call from server if time
var Badday = ["https://s3.amazonaws.com/vbmessages/badday_amelia.mp3" , "https://s3.amazonaws.com/vbmessages/badday_shaun.mp3"];
var Goal = ["https://s3.amazonaws.com/vbmessages/goal_maya.mp3"];
var Bday = ["https://s3.amazonaws.com/vbmessages/bday_victoria.mp3", "https://s3.amazonaws.com/vbmessages/bday_amelia.mp3"];
var Work = [""];
var Morning = ["https://s3.amazonaws.com/vbmessages/morning_adam.mp3", "https://s3.amazonaws.com/vbmessages/morning_maya.mp3", "https://s3.amazonaws.com/vbmessages/morning_amelia.mp3"];
var Night = ["https://s3.amazonaws.com/vbmessages/night_adam.mp3", "https://s3.amazonaws.com/vbmessages/night_amelia.mp3"];

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
    callback(null, "cndwjknvdk");
};

//dealing with requests to alexa
const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', 'welcome to voicebox');
    },
    'PlayUpliftingAudio': function () {
        var random = Math.floor((Math.random() * Badday.length - 1) + 1); 
        var audio = '<audio src='+`"${Badday[random]}"`+'/>'; //get random audio
        this.emit(':tell', `from ${Badday[random].split("_")[1].split(".")[0]} ...  ${audio}`); //say name and spoken message
    },
    'PlayBdayAudio': function() {
        var random = Math.floor((Math.random() * Bday.length - 1) + 1);
        var audio = '<audio src='+`"${Bday[random]}"`+'/>';
        this.emit(':tell', `from ${Bday[random].split("_")[1].split(".")[0]} ...  ${audio}`);
    },
     'PlayGoodmorningAudio': function() {
        var random = Math.floor((Math.random() * Morning.length - 1) + 1);
        var audio = '<audio src='+`"${Morning[random]}"`+'/>';
        this.emit(':tell', `from ${Morning[random].split("_")[1].split(".")[0]} ...  ${audio}`);
    },
    'PlayWorkAudio': function() {
        var random = Math.floor((Math.random() * Work.length - 1) + 1);
        var audio = '<audio src='+`"${Work[random]}"`+'/>';
        this.emit(':tell', `from ${Work[random].split("_")[1].split(".")[0]} ...  ${audio}`);
    },
    'PlayGoalAudio': function() {
        var random = Math.floor((Math.random() * Goal.length - 1) + 1);
        var audio = '<audio src='+`"${Goal[random]}"`+'/>';
        this.emit(':tell', `from ${Goal[random].split("_")[1].split(".")[0]} ...  ${audio}`);
    },
    'PlayGoodnightAudio': function() {
        var random = Math.floor((Math.random() * Night.length - 1) + 1);
        var audio = '<audio src='+`"${Night[random]}"`+'/>';
        this.emit(':tell', `from ${Night[random].split("_")[1].split(".")[0]} ...  ${audio}`);
    },
    'Emergency': function() {
         this.emit(':tell', 'Please immediately call the National Suicide Prevention Lifeline at 1-800-273-8255, or talk to a mental health professional.');
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':tell', 'goodbye');
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'goodbye');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'goodbye');
    },
};