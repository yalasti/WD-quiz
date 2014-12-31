var questions = [{
        question: "What is Daryl main weapon?",
        choices: ["Ax", "Rifle", "Crossbow"],
        answer: 3}
    ,{
        question: "What was the reason Rick Grimes was in a coma?",
        choices: ["He was in a car crash", "Shot while working", "He was stabbed"],
        answer: 2}
    ,{
        question: "Terminus was the original name of what city?",
        choices: ["Atlanta", "Savannah", "Alexandria"],
        answer: 1}
    ,{
        question: "Who killed Otis?",
        choices: ["Carl", "Rick", "Shane"],
        answer: 3}
    ,{
        question: "What is the name of the character that Rick tries to contact on the walkie talkie?",
        choices: ["Morgan", "Marcus", "Michael"],
        answer: 1}
    ,{
        question: "What is in the barn on the farm?",
        choices: ["Walkers", "Horses", "Food"],
        answer: 1}
    ,{
        question: "What or who was TS-19?",
        choices: ["Nerve gas", "The virus that caused the outbreak", "Jenner dead wife"],
        answer: 3}
    ,{
        question: "How did the Governor die?",
        choices: ["Stabbed", "Shot", "Bitten"],
        answer: 1}
];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var display = function () {
        if (questionNumber === questions.length) {
            $("h2").text("You finished the quiz! You scored " + numberCorrect + " points out of 8!" + " Refresh the page to take the quiz again.");
            for (x = 0; x < 3; x++) { $("#a" + x).remove(); }
        } else {
            $("h2").text(questions[questionNumber].question);
            for (x = 0; x < 3; x++) {
                $("#a" + x).html("<input type='radio' name='answer' value='" + x + "'>" + questions[questionNumber].choices[x] + "</input>");
            }
        }
    };
    display();
    $("#button").on("click", "#text", function() {
        var userAnswer = +$('input[name=answer]:checked').val();
        var correctAnswer = questions[questionNumber].answer - 1; 
        if (userAnswer === correctAnswer) {
            numberCorrect = numberCorrect + 1;
            alert("You're answer is correct! " + numberCorrect + " points");
        } else {
            alert("Sorry, that's the wrong answer! You still have " + numberCorrect + " points");
        }
        questionNumber = questionNumber + 1;
        display();
    });
});