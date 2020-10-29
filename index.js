// UI

const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');
const clickMeButtonTwo = document.querySelector('#click-me-two');

clickMeButton.addEventListener('click', () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onDataReceived);
});

clickMeButtonTwo.addEventListener('click', () => {
    const promise = getNames();
    promise.then(onNamesReceived);
});

function onDataReceived(data) {
    data.forEach(el => {
        const image = document.createElement('img');
        image.src = el.thumbnail;
        document.querySelector('#result').appendChild(image);
    });
}

function onNamesReceived(data) {
    let table = document.createElement('table');
    let body = document.querySelector('body');
    body.appendChild(table);

    data.forEach(el => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        table.appendChild(tr);
        tr.appendChild(td);
        td.innerText = el.name;
    })
}

