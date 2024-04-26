import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Filme: locação iniciada.");
    }
    getDescription(): void {
        console.log("Filme: De Volta Para O Futuro");
        console.log("O filme conta a história de um adolescente que acidentalmente viaja no tempo para 1955 e precisa fazer com que seus pais se apaixonem novamente para garantir sua própria existência no futuro.");
        console.log();
    }
}