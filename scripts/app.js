import { indexItems, createItem, showItem } from './api.js'
import {
    onIndexItemSuccess,
    onFailure,
    onCreateItemSuccess,
    onShowItemSuccess
} from './ui.js'

const createItemForm = document.querySelector('#create-item-form')
const indexItemContainer = document.querySelector('#index-item-container')

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