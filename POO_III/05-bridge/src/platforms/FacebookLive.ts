import IPlatform from "./interfaces/IPlatform";

export default class FacebookLive implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("FacebookLive: Transmissão iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("FacebookLive: Configurando broadcasting");
    }
    authToken(): void {
        console.log("FacebookLive: Autorizando aplicação");
    }
}