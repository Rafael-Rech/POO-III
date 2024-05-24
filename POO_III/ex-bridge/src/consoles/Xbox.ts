import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    constructor(game : string){
        console.log("Xbox: ligando...");
        this.configureGame(game);
    }
    configureGame(game: string): void {
        this.authToken();
        console.log("Xbox: iniciando jogo " + game);
    }
    authToken(): void {
        console.log("Xbox: token validado");
    }
}