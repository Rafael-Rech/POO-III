import IPlatform from "./interfaces/IPlatform";

export default class TwitchTV implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Transmissão iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando broadcasting");
    }
    authToken(): void {
        console.log("Twitch: Autorizando aplicação");
    }
}