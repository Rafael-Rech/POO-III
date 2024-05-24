import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(gamingConsole : IConsole){
        super(gamingConsole);
    }

    challenge(){
        console.log("Iniciando desafio!");
    }

    finalBoss(){
        console.log("O CHEFE FINAL SE APROXIMA");
    }
}