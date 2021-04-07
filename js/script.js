var randNums = Array.from({
    length: 5
}, i => getRandomInt(1, 11));

for (var i = 0; i < randNums.length; i++) {
    document.getElementsByTagName('li')[i].innerHTML = randNums[i];
}

setTimeout(function() {
    for (var item of document.getElementsByTagName('li')) {
        item.classList.add('pause')
    }
    var rightCalls = [];
    var output = '';
    var counter = 0;
    for (var i = 0; i < randNums.length; i++) {
        guess = parseInt(prompt(`inserire n.ro ${i+1}`)) === randNums[i];
        counter += guess;
        rightCalls.push(guess);
        output += `${guess ? '' : 'non '}hai indovinato l'elemento al ${i+1}° posto\n`
    }
    alert(output);
    document.getElementById('punteggio').innerHTML += counter;
}, 4900)

// alert(`numeri da memorizzare:\n${randNums.join('\n')}`)
// setTimeout(function() {
//     var rightCalls = [];
//     var output = '';
//     var counter = 0;
//     for (var i = 0; i < randNums.length; i++) {
//         guess = parseInt(prompt(`inserire n.ro ${i+1}`)) === randNums[i];
//         counter += guess;
//         rightCalls.push(guess);
//         output += `${guess ? '' : 'non '}hai indovinato l'elemento al ${i+1}° posto\n`
//     }
//     alert(output);
//     alert(`totale n.ri indovinati: ${counter}`);

// }, 3000)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}