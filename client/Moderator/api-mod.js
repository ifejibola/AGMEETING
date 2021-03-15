
const create = async (mod) => {
    try {
        let response = await fetch('/api/mod/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mod)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}




export {
    create,
}

