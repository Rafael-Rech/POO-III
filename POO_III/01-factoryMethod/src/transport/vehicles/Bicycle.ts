import IVehicle from "./interfaces/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: Iniciando a Entrega...");
    }
    getCargo(): void {
        console.log("Bicicleta: Já retiramos a encomenda!");
    }
}