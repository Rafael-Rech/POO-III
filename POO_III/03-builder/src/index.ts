import VehicleBuilder from "./builders/VehicleBuilder";
import Transmission from "./components/Transmission";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

let vehicles : Vehicle[] = []
director.constructSedanCar();
vehicles.push(builder.getVehicle());
director.constructTruck();
vehicles.push(builder.getVehicle());
director.constructSUV();
vehicles.push(builder.getVehicle());
director.constructSportCar();
vehicles.push(builder.getVehicle());
director.constructPickupTruck();
vehicles.push(builder.getVehicle());
director.constructMotorcycle();
vehicles.push(builder.getVehicle());

vehicles.forEach(function (vehicle){
    console.log("Construindo veículo...");
    console.log("Tipo: " + vehicle.vehicleType);
    console.log("Potência: " + vehicle.engine.power);
    console.log(vehicle.wheels.length + " rodas de aro " + vehicle.wheels[0].ring);
    console.log("Assentos: " + vehicle.seats);
    switch(vehicle.transmission){
        case Transmission.AUTOMATIC:
            console.log("Transmissão: Automática");
            break;
        case Transmission.MANUAL:
            console.log("Transmissão: Manual");
            break;
        case Transmission.AUTOMATIC_SEQUENTIAL:
            console.log("Transmissão: Automática Sequencial");
            break;
    }
    console.log();
});