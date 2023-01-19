// making api call
export const indexItems = () => {
    return fetch('http://localhost:8000/items')
}

export const createItem = (data) => {
    return fetch('http://localhost:8000/items', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showItem = (id) => {
    return fetch(`http://localhost:8000/items/${id}`)
}