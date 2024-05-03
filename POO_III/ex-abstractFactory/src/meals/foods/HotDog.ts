import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    eat(): void {
        this.putSauce();
        console.log("Cachorro quente: comendo!");
    }
    putSauce(): void {
        console.log("Cachorro quente: ketchup e mostarda colocados!");
    }
}