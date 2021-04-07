// HTML ELEMENTS
const DECK = document.getElementById('deck');
const QUESTION = document.getElementById('question');
const SCORE = document.getElementById('punteggio');
const INPUT_WRAPPER = document.getElementById('prompt-wrapper');
const USER_INPUT = document.getElementById('prompt-number');

// MISC
const SEED = 5; // number of cards/random integers

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
/* HIDE DECK>li INNERHTML AFTER A 5s (MORE OR LESS) DELAY,
    DISPLAY INPUT_WRAPPER
*/
setTimeout(function() {
    DECK.classList.add('pause');
    INPUT_WRAPPER.classList.remove('nada');
}, 4900)

var counter = 0;
var rightCalls = [];
var output = '';

QUESTION.innerHTML = `inserire n.ro ${counter+1}`
document.getElementById('send').addEventListener('click', function() {
        var answer = parseInt(USER_INPUT.value) === randNums[counter];
        counter++;
        rightCalls.push(answer);
        if (counter == 5) {
            alert(rightCalls);
            INPUT_WRAPPER.classList.add('nada');
            DECK.classList.remove('pause');
            // robe orripilanti qua, stasera miglioro
            SCORE.innerHTML += rightCalls.reduce(function(a, b) {
                return a + b
            }, 0);
        }
        QUESTION.innerHTML = `inserire n.ro ${counter+1}`
    }

)

// GENERIC FUNCTIONS
function getRandomInt(min, max) {
    // RETURN A RANDOM INTEGER BETWEEN min (INCLUDED) AND max (EXCLUDED)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}