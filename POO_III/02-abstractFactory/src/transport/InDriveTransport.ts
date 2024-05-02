import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import Scooter from "../vehicles/land/Scooter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class InDriveTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }   
}