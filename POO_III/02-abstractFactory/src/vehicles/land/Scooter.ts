import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Trajeto iniciado...");
    }
    getCargo(): void {
        console.log("Scooter: Encomenda adquirida!");
    }
}