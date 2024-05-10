import IBuilder from "./builders/interfaces/IBuilder";
import SandwichBuilder from "./builders/SandwichBuilder";
import Director from "./directors/Director";
import Sandwich from "./products/Sandwich";

let builder : IBuilder = new SandwichBuilder();
let director : Director = new Director(builder);

let sandwichs : Sandwich [] = [];
director.constructHotDog();
sandwichs.push(builder.getSandwich());
director.constructXSalada();
sandwichs.push(builder.getSandwich());


sandwichs.forEach(sandwich => {
    console.log("Fazendo sanduíche...");
    console.log("Sanduíche pronto!");
    console.log("Tipo do sanduíche: " + sandwich.sandwichType);
    console.log("Pão: " + sandwich.bread.type + (sandwich.bread.hasSesame? ", com gergelim" : ", sem gergelim"));
    console.log("Proteína: " + sandwich.protein.type + ", com " + sandwich.protein.calories + " cal");
    console.log("Salada: " + sandwich.salad.type + ", " + sandwich.salad.quantityInGrams + " g");
    console.log("Molhos: " + sandwich.sauce);
    console.log();
});
