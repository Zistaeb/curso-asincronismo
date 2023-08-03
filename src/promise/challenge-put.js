import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

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
    return response;
};

const dataUpdate = {
    "title": "Pocahontas",
    "price": 99
  };

putData (`${API}/products/208`, dataUpdate)
.then(response => response.json())
.then(data => console.log(dataUpdate));