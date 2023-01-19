const indexItemContainer = document.querySelector('#index-item-container')
// area to display fail/success message
const messageContainer = document.querySelector('#message-container')
const showItemContainer = document.querySelector('#show-item-container')

export const onIndexItemSuccess = (items) => {
    items.forEach(item => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h4>${item.itemName}</h4>
            <button data-id="${item._id}">Details</button>
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

        <form data-id="${item._id}">
            <input type="text" name="itemName" value="${item.itemName}">

            <input type="text" name="description" value="${item.description}">

            <input type="number" name="quantity" value="${item.quantity}">

            <input type="submit" value="Update item">
      </form>

      <button data-id="${item._id}">Remove item</button>

    `
    showItemContainer.appendChild(div)
}

export const onItemUpdateSuccess = () => {
    messageContainer.innerText = `Item has been updated`
}

export const onDeleteItemSuccess = () => {
    messageContainer.innerText = 'Item removed'
}