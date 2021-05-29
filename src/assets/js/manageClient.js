import clients from './clients.js'
import creator from './creator.js'

function manageClient() {
    const create = creator();

    this.start = () => {
        listClients();
        showDetails();
    }

    function listClients() {
        const namesList = document.querySelector('.namesList')
        for (let id in clients) {
            let newName = create.createName(clients[id].name)
            namesList.insertAdjacentHTML('beforeend',
                `
                <li class="nameList ${id}">${newName}</li> 
            `
            );
        }
    }

    function createDetailsDiv(client) {
        let detailsSection = document.querySelector('.detailsSection')
        detailsSection.innerHTML = ''
        detailsSection.insertAdjacentHTML('beforeend',
            `
            <li class="clientDetails">${client.name}</li> 
            <li class="clientDetails">${client.cpf}</li> 
            <li class="clientDetails">${client.birthday}</li> 
        `
        )

    }

    function showDetails() {
        for (let i in clients) {
            const client = clients[i]
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains(i)) createDetailsDiv(client)
            })
        }

    }


    
}

export default manageClient;