// const resultBlock = document.querySelector('#result');
// const clickMeButton = document.querySelector('#click-me');
//
// clickMeButton.addEventListener('click', makeRequest);
//
// function makeRequest() {
//     resultBlock.innerHTML = 'result';
// }
//
// let a = 5;
//
// console.log(0);

// $.ajax('https://repetitora.net/api/JS/Images', {
//     success: function (data) {
//         data.forEach(el => {
//             const image = document.createElement('img');
//             image.src = el.thumbnail;
//             document.querySelector('body').appendChild(image);
//         })
//     }
// });

$.ajax('https://gorest.co.in/public-api/users', {
    success: function (data) {
        let table = document.createElement('table');
        let body = document.querySelector('body');
        body.appendChild(table);

        console.log(data);
        data.data.forEach(el => {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            table.appendChild(tr);
            tr.appendChild(td);
            td.innerText = el.name;
        })
    }
})

console.log(1);


// console.log(0);
//
// setTimeout(() => {console.log(1)}, 1000);
//
// console.log(2);