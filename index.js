// UI

const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const getImagesButton = document.querySelector('#get-images');
const getNamesButton = document.querySelector('#get-names');
const getTasksButton = document.querySelector('#get-tasks');

getImagesButton.addEventListener('click', () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived);
});

getTasksButton.addEventListener('click', () => {
    const promise = getTasks();
    promise.then(onTasksReceived);
});

createTask('learn JS').then((data) => {
    console.log(data);
});

function onTasksReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        document.querySelector('#tasks-result').appendChild(li);
    });
}

function onImagesReceived(data) {
    data.forEach(el => {
        const image = document.createElement('img');
        image.src = el.thumbnail;
        document.querySelector('#result').appendChild(image);
    });
}



// getNamesButton.addEventListener('click', () => {
//     const promise = getNames();
//     promise.then(onNamesReceived);
// });


// function onNamesReceived(data) {
//     let table = document.createElement('table');
//     let body = document.querySelector('body');
//     body.appendChild(table);
//
//     data.forEach(el => {
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         table.appendChild(tr);
//         tr.appendChild(td);
//         td.innerText = el.name;
//     })
// }

