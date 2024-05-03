import IDrink from "../meals/drinks/interfaces/IDrink";
import SoftDrink from "../meals/drinks/SoftDrink";
import HotDog from "../meals/foods/HotDog";
import IFood from "../meals/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}