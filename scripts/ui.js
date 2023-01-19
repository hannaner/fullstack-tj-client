const indexItemContainer = document.querySelector('#index-item-container')
// area to display fail/success message
const messageContainer = document.querySelector('#message-container')
const showItemContainer = document.querySelector('#show-item-container')

export const onIndexItemSuccess = (items) => {
    items.forEach(item => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h4>${item.itemName}</h4>
            <button data-id="${item._id}">Show more details</button>
        `

        indexItemContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `
}

export const onCreateItemSuccess = (item) => {
    messageContainer.innerText = "Nice add!"
}

export const onShowItemSuccess = (item) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>Selected: ${item.itemName}</h3>
        <p>${item.description}<p>
        <p>quantity: ${item.quantity}<p>
        <p>item no: ${item._id}</p>
        <hr>
    `
    showItemContainer.appendChild(div)
}