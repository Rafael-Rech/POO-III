import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    eat(): void {
        this.putSauce();
        console.log("Hamburguer: comendo!");
    }
    putSauce(): void {
        console.log("Hamburguer: ketchup colocado!");
    }
}