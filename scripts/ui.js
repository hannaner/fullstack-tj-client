const indexItemsContainer = document.querySelector('#index-item-container')

export const onIndexItemsSuccess = (items) => {
    items.forEach(item => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${item.</h3>
        `
    })
}