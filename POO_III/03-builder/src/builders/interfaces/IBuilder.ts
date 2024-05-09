import Engine from "../../components/Engine";
import Transmission from "../../components/Transmission";
import VehicleType from "../../components/VehicleType";
import Wheel from "../../components/Wheel";
import Vehicle from "../../products/Vehicle";

export default interface IBuilder{
    reset() : void;
    getVehicle() : Vehicle;
    addWheel(wheel : Wheel);
    setVehicleType(value : VehicleType);
    setSeat(seats : number);
    setEngine(engine : Engine);
    setTransmission(transmission : Transmission);
}