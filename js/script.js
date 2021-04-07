// HTML ELEMENTS
const DECK = document.getElementById('deck');
const QUESTION = document.getElementById('question');
const SCORE = document.getElementById('punteggio');
const INPUT_WRAPPER = document.getElementById('prompt-wrapper');
const USER_INPUT = document.getElementById('prompt-number');
const SEND = document.getElementById('send');

// MISC
const SEED = 5; // number of cards/random integers
const DELAY = 5000; // delay before hiding card value in ms

/*  FOR (N == SEED) TIMES: 
 * GENERATE item = RANDOM INTEGER, 
 * CREATE li>{item} IN DECK, 
 * PUSH item TO randNums ARRAY
 */
var randNums = [];
for (var i = 0; i < SEED; i++) {
    var item = getRandomInt(1, 11);
    DECK.innerHTML += `<li>${item}</li>`
    randNums.push(item);
}
/* HIDE DECK>li INNERHTML AFTER A 5s DELAY,
    DISPLAY INPUT_WRAPPER
*/
setTimeout(function() {
    DECK.classList.add('pause');
    INPUT_WRAPPER.classList.remove('nada');
}, DELAY)

var counter = 0;
var rightCalls = 0;
// var rightCalls = [];
var output = '';

SEND.addEventListener('click', function() {
        var answer = parseInt(USER_INPUT.value) === randNums[counter];
        counter++;
        // rightCalls.push(answer);
        rightCalls += answer;
        if (counter == SEED) {
            // alert(rightCalls);
            INPUT_WRAPPER.classList.add('nada');
            DECK.classList.remove('pause');
            // SCORE.innerHTML += rightCalls.reduce(function(a, b) {
            //     return a + b
            // }, 0);
            SCORE.innerHTML += `${rightCalls}/${SEED}`
        }
        QUESTION.innerHTML = `inserire il valore della carta al ${counter+1}° posto`;
    }

)

// GENERIC FUNCTIONS
function getRandomInt(min, max) {
    // RETURN A RANDOM INTEGER BETWEEN min (INCLUDED) AND max (EXCLUDED)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}