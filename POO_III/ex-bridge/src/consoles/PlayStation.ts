import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(game : string){
        console.log("PlayStation: ligando...");
        this.configureGame(game);
    }
    configureGame(game: string): void {
        this.authToken();
        console.log("PlayStation: iniciando jogo " + game);
    }
    authToken(): void {
        console.log("PlayStation: token validado");
    }
}