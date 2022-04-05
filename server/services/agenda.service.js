export const AgendaService = {
    getAllAgenda,
    getAgendaById,
    createAgenda
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

function createAgenda(data) {
    const requestOptions = { method: 'POST', headers: headers, body: data };
    return fetch(`/api/v1/agenda/submit`, requestOptions).catch((error) => console.log(error));
}
