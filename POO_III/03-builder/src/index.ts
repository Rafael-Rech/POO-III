import VehicleBuilder from "./builders/VehicleBuilder";
import Transmission from "./components/Transmission";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

// let vehicles : Vehicle[] = []
// director.constructSedanCar();
// vehicles.push(builder.getVehicle());
// director.constructTruck();
// vehicles.push(builder.getVehicle());
// director.constructSUV();
// vehicles.push(builder.getVehicle());
// director.constructSportCar();
// vehicles.push(builder.getVehicle());
// director.constructPickupTruck();
// vehicles.push(builder.getVehicle());
// director.constructMotorcycle();
// vehicles.push(builder.getVehicle());

// for(var vehicle : Vehicle in vehicles){
//     console.log("Construindo veículo...");
//     console.log("Tipo: " + vehicle.vehicleType);
//     console.log("Potência: " + vehicle.engine.power);
//     console.log(vehicle.wheels.length + " rodas de aro " + vehicle.wheels[0].ring);
//     console.log("Assentos: " + vehicle.seats);
//     switch(vehicle.transmission){
//         case Transmission.AUTOMATIC:
//             console.log("Transmissão: Automática");
//             break;
//         case Transmission.MANUAL:
//             console.log("Transmissão: Manual");
//             break;
//         case Transmission.AUTOMATIC_SEQUENTIAL:
//             console.log("Transmissão: Automática Sequencial");
//             break;
//     }
//     console.log()
// }

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + sedan.vehicleType);
console.log("Potência: " + sedan.engine.power);
console.log(sedan.wheels.length + " rodas de aro " + sedan.wheels[0].ring);
console.log("Assentos: " + sedan.seats);
switch(sedan.transmission){
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
console.log()

director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + truck.vehicleType);
console.log("Potência: " + truck.engine.power);
console.log(truck.wheels.length + " rodas de aro " + truck.wheels[0].ring);
console.log("Assentos: " + truck.seats);
switch(truck.transmission){
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

director.constructSUV();
const suv : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + suv.vehicleType);
console.log("Potência: " + suv.engine.power);
console.log(suv.wheels.length + " rodas de aro " + suv.wheels[0].ring);
console.log("Assentos: " + suv.seats);
switch(suv.transmission){
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

director.constructPickupTruck();
const pickupTruck : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + pickupTruck.vehicleType);
console.log("Potência: " + pickupTruck.engine.power);
console.log(pickupTruck.wheels.length + " rodas de aro " + pickupTruck.wheels[0].ring);
console.log("Assentos: " + pickupTruck.seats);
switch(pickupTruck.transmission){
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

director.constructSportCar();
const sportCar : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + sportCar.vehicleType);
console.log("Potência: " + sportCar.engine.power);
console.log(sportCar.wheels.length + " rodas de aro " + sportCar.wheels[0].ring);
console.log("Assentos: " + sportCar.seats);
switch(sportCar.transmission){
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

director.constructMotorcycle();
const motorcycle : Vehicle = builder.getVehicle();
console.log("Construindo veículo...");
console.log("Tipo: " + motorcycle.vehicleType);
console.log("Potência: " + motorcycle.engine.power);
console.log(motorcycle.wheels.length + " rodas de aro " + motorcycle.wheels[0].ring);
console.log("Assentos: " + motorcycle.seats);
switch(motorcycle.transmission){
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