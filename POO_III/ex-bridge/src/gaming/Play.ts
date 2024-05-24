import IConsole from "../consoles/interfaces/IConsole";
import IGaming from "./interfaces/IGaming";

export default class Play implements IGaming{
    constructor(protected gamingConsole : IConsole){}
    playing(): void {
        console.log("Jogando...");
    }
    result(): void {
        console.log("Jogo encerrado");
    }
}