global.expect = require("expect");

const babel = require("babel-core");
const jsdom = require("jsdom");
const path = require("path");
function shout(string) {
    return string.toUpperCase('Hello'); 
}
function whisper(string) {
    return string.toLowerCase('I can\t hear you!');
}
function logShout(string) {    
    console.log('HELLO');
}
function logWhisper(string) {
    console.log('hello');
}
function sayHiToHeadphonedRoommate(string) {
    return string.toLowerCase("I can't hear you!");
}    
function hello(string) {
    return string.toUpperCase('YES INDEED');  
}

function letshavedinnertogether(string) {
    return string.toLowerCase('I would love to!');
}