import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _vehicleType: VehicleType;
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];


    public get vehicleType(): VehicleType {
        return this._vehicleType;
    }
    public set vehicleType(value: VehicleType) {
        this._vehicleType = value;
    }
    public get seats(): number {
        return this._seats;
    }
    public set seats(value: number) {
        this._seats = value;
    }
    public get engine(): Engine {
        return this._engine;
    }
    public set engine(value: Engine) {
        this._engine = value;
    }
    public get transmission(): Transmission {
        return this._transmission;
    }
    public set transmission(value: Transmission) {
        this._transmission = value;
    }
    public get wheels(): Wheel[] {
        return this._wheels;
    }
    public set wheels(value: Wheel[]) {
        this._wheels = value;
    }

    public addWheel(wheel : Wheel) : void {
        this._wheels.push(wheel);
    }
}