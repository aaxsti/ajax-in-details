// UI

const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const getImagesButton = document.querySelector('#get-images');
const getNamesButton = document.querySelector('#get-names');
const getTasksButton = document.querySelector('#get-tasks');


//createTask('learn HTML');
// deleteTask('4c3c5650-7ec3-42a2-8538-4355868f4dad');

// createTask('learn JS').then((data) => {
//     console.log(data);
// });

updateTask('learn HTML', '291b83a9-ed1c-49b9-8d0a-43399d8248a9', true);

getImagesButton.addEventListener('click', () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived);
});

getTasksButton.addEventListener('click', () => {
    const promise = getTasks();
    promise.then(onTasksReceived);
});

function onTasksReceived(tasks) {
    const result = document.querySelector('#tasks-result');
    result.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = task.title;
        li.dataset.id = task.id;
        result.appendChild(li);
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

