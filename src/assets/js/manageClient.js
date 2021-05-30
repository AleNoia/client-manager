import clients from './clients.js' // array of clients
import creator from './creator.js' // factory to creation

function manageClient() {
    const create = creator();

    // ======================================== [START MANAGER]
    this.start = () => {
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

    // ======================================== [CREATING A DIV TO DETAILS OF THE CLIENTS]
    function createDetailsDiv(client) {
        let detailsSection = document.querySelector('.detailsSection')
        const birthday = create.createAge(client.birthday)
        detailsSection.innerHTML = ''
        detailsSection.insertAdjacentHTML('beforeend',
            `
        <li class="clientDetails">${client.name}</li> 
        <li class="clientDetails">${client.cpf}</li> 
        <li class="clientDetails">${client.birthday}</li> 
        <li class="clientDetails">${birthday}</li> 
        `
        )
    }

    // ======================================== [SHOWING DETAILS OF THE CLIENTS]
    function showDetails() {
        for (let i in clients) {
            const client = clients[i]
            document.addEventListener('click', e => {
                const el = e.target
                if (el.classList.contains(i)) {
                    createDetailsDiv(client);
                    userHighlighted(client)
                }
                // if (el.classList.contains(i)) {
                //     let elHtml = el.innerHTML 
                //     // client.classList.add('h1')
                //     console.log(clients[i])
                // }
            })
        }
    }

    function userHighlighted(client) {
        const namesList = document.querySelector('.namesList')
        for (let i = 0; i < namesList.children.length; i++) {
            if(namesList.children[i].tagName == "DIV") namesList.children[i].style.backgroundColor = "#FFFFFF";
        }
    }

}

export default manageClient;