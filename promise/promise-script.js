// document.getElementById('sda').addEventListener('click', () => {
// });

let prom = doItAfter(2);
prom
    .then((message) => {
        console.log(message)
    })
    .then(() => {
        console.log('hey2')
    });


// doItAfter(2)
//     .then(() => {
//         console.log('hey');
//     })
//     .then(() => {
//         console.log('hey2');
//     })

function doItAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Max');
        }, seconds * 1000);
    });
    return promise;
}