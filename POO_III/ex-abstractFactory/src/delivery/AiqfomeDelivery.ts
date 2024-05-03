import Beer from "../meals/drinks/Beer";
import IDrink from "../meals/drinks/interfaces/IDrink";
import Hamburguer from "../meals/foods/Hamburguer";
import IFood from "../meals/foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}