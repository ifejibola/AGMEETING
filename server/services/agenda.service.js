export const AgendaService = {
    getAllAgenda,
    getAgendaById
};

const headers =  {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

function getAllAgenda() {
    const requestOptions = { method: 'GET', headers: headers };
    return fetch(`/api/v1/agenda`, requestOptions).then(res=>res.json()).catch((error) => console.log(error));
}

function getAgendaById(id) {
    const requestOptions = { method: 'GET', headers: headers };
    return fetch(`/api/v1/agenda/${id}`, requestOptions).then(res=>res.json()).catch((error) => console.log(error));
}