import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    drink(): void {
        this.putIce();
        console.log("Refrigerante: bebendo!");
    }
    putIce(): void {
        console.log("Refrigerante: gelado!");
    }
}