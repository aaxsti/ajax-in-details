const resultBlock = document.querySelector('#result');
const pageNumberEl = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');

clickMeButton.addEventListener('click', makeRequest);

function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumberEl.value}&count=1`, {
        success: function (data) {
            data.forEach(el => {
                const image = document.createElement('img');
                image.src = el.thumbnail;
                document.querySelector('#result').appendChild(image);
            })
        }
    });
}


// $.ajax('https://gorest.co.in/public-api/users', {
//     success: function (data) {
//         let table = document.createElement('table');
//         let body = document.querySelector('body');
//         body.appendChild(table);
//
//         console.log(data);
//         data.data.forEach(el => {
//             let tr = document.createElement('tr');
//             let td = document.createElement('td');
//             table.appendChild(tr);
//             tr.appendChild(td);
//             td.innerText = el.name;
//         })
//     }
// })