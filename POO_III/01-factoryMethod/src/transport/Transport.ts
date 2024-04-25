import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport{
    protected abstract createTransport() : IVehicle;

    startTransport() : void {
        const vehicle = this.createTransport();
        vehicle.startRoute();
    }
}