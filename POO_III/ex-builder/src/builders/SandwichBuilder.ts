import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./interfaces/IBuilder";

export default class SandwichBuilder implements IBuilder{
    private _sandwich : Sandwich = new Sandwich();

    reset(): void {
        this._sandwich = new Sandwich();
    }
    getSandwich(): Sandwich {
        const sandwich = this._sandwich;
        this.reset();
        return sandwich;
    }
    setSandwichType(sandwichType: SandwichType): void {
        this._sandwich.sandwichType = sandwichType;
    }
    setBread(bread: Bread): void {
        this._sandwich.bread = bread;
    }
    setProtein(protein: Protein): void {
        this._sandwich.protein = protein;
    }
    setSalad(salad: Salad): void {
        this._sandwich.salad = salad;
    }
    addSauces(sauce: Sauce): void {
        this._sandwich.addSauce(sauce);
    }
}