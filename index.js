var prompt = require('prompt-sync').prompt;
var hard = require('./hard.js');
var corretAnswers = 0;
var baselineCounter = 0;
var currentQuestion = 0;
var tier = 1;

console.log('Welcome to Nightmare Mode. What is your name');

var name = prompt();

console.log('Good are you ready for your test' + ' ' + name);

console.log('yes or no question')

var ready = prompt().toLowerCase()
if (ready === 'yes') {

    console.log('Lets begin');
    //	Q1B
    // All baseline questions
    console.log('Question 1: True(T) or False(F) Inline elements are stackable.');

    var question1B = prompt().toUpperCase()
    if (question1B === 'F') {
        corretAnswers = corretAnswers += 1;
        baselineCounter = baselineCounter += 1;
        currentQuestion = currentQuestion += 1;
        console.log('Well done');
    } else {
        console.log('Incorrect. Inline elements are not stackable');
        currentQuestion = currentQuestion += 1;
    }

    //Q2B
    console.log('Question 2: Witch is a tag selector?');
    console.log('A: Class');
    console.log('B: div, span, h1, ect.');
    console.log('C: ID');

    var question2B = prompt().toUpperCase()
    if (question2B === 'B') {
        corretAnswers = corretAnswers += 1;
        baselineCounter = baselineCounter += 1;
        currentQuestion = currentQuestion += 1;
        console.log('Well done');
    } else {
        console.log('Incorrect. B was the correct answer');
        currentQuestion = currentQuestion += 1;
    }

    //Q3B
    console.log('Question 3: True(T) or False(F) Can variables be used in CSS when using SASS? - Troy');

    var question3B = prompt().toUpperCase()
    if (question3B === 'T') {
        corretAnswers = corretAnswers += 1;
        baselineCounter = baselineCounter += 1;
        currentQuestion = currentQuestion += 1;
        console.log('Well done');
    } else {
        console.log('Incorrect. $ is the syntax for a variable in SASS');
        currentQuestion = currentQuestion += 1;
    }

    //Q4B
    console.log('Question 4: True(T) or Flase(F) Block elements stretch to fit there parent element.');

    var question4B = prompt().toUpperCase()
    if (question4B === 'T') {
        corretAnswers = corretAnswers += 1;
        baselineCounter = baselineCounter += 1;
        currentQuestion = currentQuestion += 1;
        console.log('Well done');
    } else {
        console.log('Incorrect. Block elements stretch to fit the parent element');
        currentQuestion = currentQuestion += 1;
    }

    //Q5B ************ LAST IN BASELINE COUNTER ******************
    console.log('Question 5: How do you start your HTML document?');
    console.log('A: <html></html>');
    console.log('B: <title></title>');
    console.log('C: <!DOCTYPE html>');

    var question5B = prompt().toUpperCase()
    if (question5B === 'C') {
        corretAnswers = corretAnswers += 1;
        baselineCounter = baselineCounter += 1;
        console.log('Well done');
    } else {
        console.log('Incorrect. You start with <!DOCTYPE html>');
    }
    //*************START FUNCTION *****************
    //HARD QUESTIONS
    if (baselineCounter >= 4) {
        var quiz = function() {
            while (currentQuestion <= currentQuestion) {
                switch (tier) {
                    case tier === 2:
                        for (var i = currentQuestion; i < currentQuestion + 1; i--) {
                            console.log(hard.tier1[currentQuestion - 5]);
                        }
                }
            currentQuestion = currentQuestion - 1;
            }
        }
        quiz();
    }
    //EASY QUSTIONS
    else if (baselineCounter >= 2) {

    }
    //BASELINE QUESTIONS
    else {

    }
};
