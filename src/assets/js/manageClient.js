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
            <button class="btn nameList navItem ${id}"><i class="fas fa-user mr-2"></i>${newName}</button> 
            `
            );
        }
    }

    // ======================================== [SHOWING DETAILS OF THE CLIENTS]
    function showDetails() {
        const nameClient = document.querySelector('.nameClient')
        const emailClient = document.querySelector('.emailClient')
        const cpfClient = document.querySelector('.cpfClient')
        const rgClient = document.querySelector('.rgClient')
        const cellularPhoneClient = document.querySelector('.cellularPhoneClient')
        const landlineClient = document.querySelector('.landlineClient')
        const birthdayClient = document.querySelector('.birthdayClient')
        const ageClient = document.querySelector('.ageClient')
        const cepClient = document.querySelector('.cepClient')
        const districtClient = document.querySelector('.districtClient')
        const cityClient = document.querySelector('.cityClient')
        const stateClient = document.querySelector('.stateClient')
        const addressClient = document.querySelector('.addressClient')
        const numberClient = document.querySelector('.numberClient')

        for (let i in clients) {
            const client = clients[i]

            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains(i)) {
                    nameClient.innerHTML = client.name
                    emailClient.innerHTML = client.email
                    cpfClient.innerHTML = client.cpf
                    rgClient.innerHTML = client.rg
                    cellularPhoneClient.innerHTML = client.cellularPhone
                    landlineClient.innerHTML = client.landline
                    birthdayClient.innerHTML = client.birthday
                    const age = create.createAge(client.birthday)
                    ageClient.innerHTML = age
                    cepClient.innerHTML = client.cep
                    districtClient.innerHTML = client.district
                    cityClient.innerHTML = client.city
                    stateClient.innerHTML = client.state
                    addressClient.innerHTML = client.address
                    numberClient.innerHTML = client.number


                }

                userHighlighted(el) // highlight client
            })
        }
    }

    // ======================================== [HIGHLIGHT CLIENT CLICKED]
    function userHighlighted(client) {
        const nameList = document.querySelectorAll('.nameList')
        nameList.forEach(el => el.classList.toggle('active', el === client))
    }

    // ======================================== [RETURNING START APP]
    return {
        start,
    }
}

export default manageClient;