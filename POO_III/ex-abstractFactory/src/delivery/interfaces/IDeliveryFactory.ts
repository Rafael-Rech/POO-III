import IDrink from "../../meals/drinks/interfaces/IDrink";
import IFood from "../../meals/foods/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}