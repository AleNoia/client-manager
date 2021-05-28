import managerClient from './manageClient.js'

const app = new managerClient();

try{
    app.start();
}catch(e){
    console.log('[error] Uncaught error!')
    console.log(e)
}
