// DAL

function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

function getNames() {
    const promise = axios.get(`https://gorest.co.in/public-api/users`);
    return promise.then((response) => {
        return response.data.data;
    });
}
