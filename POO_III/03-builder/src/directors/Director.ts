import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{
    constructor (private _builder : IBuilder){}

    constructSedanCar(){
        this._builder.setVehicleType(VehicleType.SEDAN);
        this._builder.setSeat(5);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setEngine(new Engine(1600));
        for(var i : number = 0; i < 4; i++){
            this._builder.addWheel(new Wheel(15));
        }
    }
    
    constructTruck(){
        for(var i : number = 0; i < 6; i++){
            this._builder.addWheel(new Wheel(20));
        }
        this._builder.setEngine(new Engine(2200));
        this._builder.setSeat(3);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setVehicleType(VehicleType.TRUCK); 
    }

    constructSUV(){
        for(var i : number = 0; i < 4; i++){
            this._builder.addWheel(new Wheel(16));
        }
        this._builder.setEngine(new Engine(2000));
        this._builder.setSeat(5);
        this._builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this._builder.setVehicleType(VehicleType.SUV); 
    }

    constructPickupTruck(){
        for(var i : number = 0; i < 4; i++){
            this._builder.addWheel(new Wheel(17));
        }
        this._builder.setEngine(new Engine(2100));
        this._builder.setSeat(3);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setVehicleType(VehicleType.PICKUPTRUCK); 
    }

    constructSportCar(){
        for(var i : number = 0; i < 4; i++){
            this._builder.addWheel(new Wheel(15));
        }
        this._builder.setEngine(new Engine(2000));
        this._builder.setSeat(2);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setVehicleType(VehicleType.SPORTCAR); 
    }

    constructMotorcycle(){
        for(var i : number = 0; i < 2; i++){
            this._builder.addWheel(new Wheel(14));
        }
        this._builder.setEngine(new Engine(1000));
        this._builder.setSeat(1);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setVehicleType(VehicleType.MOTORCYCLE); 
    }
}