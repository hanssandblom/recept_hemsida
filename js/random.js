function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#ingred');
const url = 'data/allaingred.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.ingredienser);
        shuffle(data.ingredienser);
        console.log(data.ingredienser);
        console.log("Visa första i json-objektet: " + data.ingredienser[0].ingredTitle);
        let ingredienser = data.ingredienser;

        // Returnerar json-objekten genom att skapa en ny array med map()
        return ingredienser.map(function(ingred) {
            let li = createNode('li');
            li.innerHTML = ingred.ingredTitle + " " + ingred.ingredStrength;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

function shuffle(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}