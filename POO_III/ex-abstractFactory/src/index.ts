import Client from "./clients/Client";
import AiqfomeDelivery from "./delivery/AiqfomeDelivery";
import Company from "./delivery/Company";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentCompany = Company.IFOOD;
let factory : IDeliveryFactory;
let hasFood : boolean = true;
let hasDrink : boolean = true;

switch(currentCompany){
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    case Company.AIQFOME:
        factory = new AiqfomeDelivery();
        break;
    default:
        console.log("Selecione uma companhia válida!");
        break;
}

if(factory){
    const client = new Client(factory, hasFood, hasDrink);
    client.startMeal();
}
