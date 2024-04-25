import BicycleTransport from "./transport/BicycleTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport : Transport;

if(process.argv.includes("uber")){
    transport = new CarTransport();
} else if (process.argv.includes("eats")){
    if(Math.random() > 0.5){
        transport = new MotorcycleTransport();
    } else {
        transport = new BicycleTransport();
    }   
} else {
    console.log("Selecione o tipo de transporte!");
}

if(transport) transport.startTransport();