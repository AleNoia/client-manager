import clients from './clients.js' // array of clients
import creator from './creator.js' // factory to creation

function manageClient() {
    const create = creator();

    // ======================================== [START MANAGER]
    function start() {
        listClients();
        showDetails();
    }

    // ======================================== [LISTING CLIENTS]
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

    // ======================================== [SHOWING DETAILS OF THE CLIENTS]
    function showDetails() {
        const nameClient = document.querySelector('.nameClient')
        const emailClient = document.querySelector('.emailClient')
        const cpfClient = document.querySelector('.cpfClient')

        for (let i in clients) {
            const client = clients[i]

            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains(i)) {
                    nameClient.innerHTML = client.name
                    emailClient.innerHTML = client.email
                    cpfClient.innerHTML = client.cpf

                }

                userHighlighted(el) // highlight client
            })
        }
    }

    // ======================================== [HIGHLIGHT CLIENT CLICKED]
    function userHighlighted(client) {
        const nameList = document.querySelectorAll('.nameList')
        nameList.forEach(el => el.classList.toggle('h1', el === client))
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }
}

export default manageClient;