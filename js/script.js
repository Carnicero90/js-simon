var randNums = Array.from({
    length: 5
}, i => getRandomInt(1, 11));


const boh = document.getElementById('boh');
const userPrompt = document.getElementById('question');
for (var i = 0; i < randNums.length; i++) {
    // randNums.push(getRandomInt(1, 11));
    document.getElementsByTagName('li')[i].innerHTML = randNums[i];
}

setTimeout(function() {
    document.getElementById('deck').classList.add('pause');
    boh.classList.remove('nada');
}, 4900)
var counter = 0;
var rightCalls = [];
var output = '';

userPrompt.innerHTML = `inserire n.ro ${counter+1}`
document.getElementById('send').addEventListener('click', function() {
        var answer = parseInt(document.getElementById('prompt-number').value) === randNums[counter];
        counter++;
        rightCalls.push(answer);
        if (counter == 5) {
            alert(rightCalls);
            boh.classList.add('nada');
            document.getElementById('deck').classList.remove('pause');
            // robe orripilanti qua, stasera miglioro
            document.getElementById('punteggio').innerHTML += rightCalls.reduce(function(a, b) {
                return a + b

            }, 0);
        }
        userPrompt.innerHTML = `inserire n.ro ${counter+1}`


    }

)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}