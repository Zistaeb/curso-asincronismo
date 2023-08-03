import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function deleteData(urlApi, dataDelete) {
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        //No es necesario especificar el body
    });
    return response;
};

const idNumber = 208;

deleteData (`${API}/products/${idNumber}`)
.then(() => console.log (`Borrado ${idNumber}`));