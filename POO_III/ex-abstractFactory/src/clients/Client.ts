import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../meals/drinks/interfaces/IDrink";
import IFood from "../meals/foods/interfaces/IFood";

export default class Client{
    private _food : IFood;
    private _drink : IDrink;
    private _hasFood : boolean;
    private _hasDrink : boolean;

    constructor(factory : IDeliveryFactory, hasFood : boolean, hasDrink : boolean){
        if(hasFood){
            this._hasFood = true;
            this._food = factory.createDeliveryFood();
        }
        if(hasDrink){
            this._hasDrink = true;
            this._drink = factory.createDeliveryDrink();
        }
    }

    public startMeal(){
        if(this._hasFood){
            this._food.eat();
        }
        if(this._hasDrink){
            this._drink.drink();
        }
        if(!this._hasDrink && !this._hasFood){
            console.log("Este cliente não possui comida ou bebida!");
        }
    }
}