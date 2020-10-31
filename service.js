// DAL

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

// function getNames() {
//     const promise = axios.get(`https://gorest.co.in/public-api/users`);
//     return promise.then((response) => {
//         return response.data.data;
//     });
// }

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=4454`);
    return promise.then((response) => {
        return response.data;
    });
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 4454,
        title: title
    });
    return promise.then((response) => {
        return response.data;
    });
}
