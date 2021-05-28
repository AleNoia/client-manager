import clients from './clients.js'
const namesList = document.querySelector('.namesList')

function manageClient() {
    this.start = () => {
        listClients();
    }

    function listClients() {
        for (let client in clients) {
            let id = client
            let newName = nameFactory(clients[id].name)
            namesList.insertAdjacentHTML('beforeend',
            `
            <li class="nameList">${newName}</li> 
            `
            );
        }
    }

    function nameFactory(name) {
        let arrayName = name.split(' ')

        if (arrayName.length > 3){

            let smallerName2 = arrayName[2].split("").slice(0, 1).join() + '.';
            arrayName[2] = smallerName2
            if(arrayName.length > 4){
                let smallerName3 = arrayName[3].split("").slice(0, 1).join() + '.';
                arrayName[3] = smallerName3
            }
            var newName = arrayName.join(" ")
            return newName
        }

        return name
    }
}

export default manageClient;