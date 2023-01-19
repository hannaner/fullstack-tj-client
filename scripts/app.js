import { indexItems, createItem, showItem, updateItem, deleteItem } from './api.js'
import {
    onIndexItemSuccess,
    onFailure,
    onCreateItemSuccess,
    onShowItemSuccess,
    onItemUpdateSuccess,
    onDeleteItemSuccess
} from './ui.js'

const createItemForm = document.querySelector('#create-item-form')
const indexItemContainer = document.querySelector('#index-item-container')
const showItemContainer = document.querySelector('#show-item-container')

indexItems()
    .then((res) => res.json())
    .then((res) => onIndexItemSuccess(res.items))
    .catch(onFailure)

createItemForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const itemData = {
        item: {
            itemName: event.target['itemName'].value,
            description: event.target['description'].value,
            quantity: event.target['quantity'].value
        }
    }

    createItem(itemData)
        .then(onCreateItemSuccess)
        .catch(onFailure)
})

indexItemContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    
    if (!id) return

    showItem(id)
        .then((res) => res.json())
        .then((res) => onShowItemSuccess(res.item))
        .catch(onFailure)
})


showItemContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('data-id')

    const itemData = {
        item: {
            itemName: event.target['itemName'].value,
            description: event.target['description'].value,
            quantity: event.target['quantity'].value
        }
    }
    
    // if there's no id, then return
    if (!id) return

    updateItem(itemData, id)
        .then(onItemUpdateSuccess)
        .catch(onFailure)
})

showItemContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')

    if (!id) return

    deleteItem(id)
        .then(onDeleteItemSuccess)
        .catch(onFailure)
})