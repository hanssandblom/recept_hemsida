function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#recept');
const url = 'data/data.json';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.recepts);
        console.log("Visa första i json-objektet: " + data.recepts[0].receptTitle);
        let recepts = data.recepts;

        // Returnerar json-objekten genom att skapa en ny array med map()
        return recepts.map(function(recept) {
            let li = createNode('li');
            li.innerHTML = recept.receptTitle + " " + recept.receptContent + " " + recept.receptDate;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
