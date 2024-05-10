import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SandwichType from "../components/SandwichType";
import Sauce from "../components/Sauce";

export default class Director{
    private _builder : IBuilder;

    constructor(sandwichBuilder : IBuilder){
        this._builder = sandwichBuilder;
    }

    public constructHotDog(){
        this._builder.setBread(new Bread("Pão de Hot Dog", false));
        this._builder.setProtein(new Protein("Salsicha", 150));
        this._builder.setSalad(new Salad("Alface", 50));
        this._builder.setSandwichType(SandwichType.HOTDOG);
        this._builder.addSauces(Sauce.KETCHUP);
        this._builder.addSauces(Sauce.MUSTARD);
    }

    public constructXSalada(){
        this._builder.setBread(new Bread("Pão redondo", true));
        this._builder.setProtein(new Protein("Ovo", 70));
        this._builder.setSalad(new Salad("Alface", 100));
        this._builder.setSandwichType(SandwichType.XSALADA);
        this._builder.addSauces(Sauce.MAYONNAISE);
    }
}