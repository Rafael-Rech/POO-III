import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    drink(): void {
        this.putIce();
        console.log("Cerveja: bebendo!");
    }
    putIce(): void {
        console.log("Cerveja: gelada!");
    }
}