import fetch from 'node-fetch';
/*const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response
};

const data = {
  "title": "New Product in Course",
  "price": 13,
  "description": "A description",
  "categoryId": 13,
  "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
.then(response => response.json())
.then(data => console.log(data));*/

const API = 'https://api.escuelajs.co/api/v1/products/1';

function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate),
    });
    return response
};

const dataUpdate = {
    "title": "Change title",
    "price": 100
  };

putData (`${API}/products/207`, dataUpdate)
.then(response => response.json())
.then(data => console.log(dataUpdate));