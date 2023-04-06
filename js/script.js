"use strict";

function get(myUrl) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", myUrl);
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.send();
    });
}

function addText(data) {
    const element = document.getElementsByClassName("main__text");
    element[0].innerHTML = data[0].substr(0, 100) + "...";
}

const timerId = setInterval(function () {
    const obj = get("https://baconipsum.com/api/?type=lucky")
        .then((data) => addText(data))
        .catch((err) => console.log(err));
}, 2000);
