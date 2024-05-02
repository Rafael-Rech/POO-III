import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private _vehicle : ILandVehicle;
    private _aircraft : IAircraft;
    private _isLand : boolean;

    constructor(factory : ITransportFactory, isLand : boolean){
        this._isLand = isLand;
        if(isLand){
            this._vehicle = factory.createTransportVehicle();
        } else {
            this._aircraft = factory.createTransportAircraft();
        }
    }

    startRoute() : void{
        if(this._isLand){
            this._vehicle.startRoute();
        } else {
            this._aircraft.startRoute();
        }
    }
}