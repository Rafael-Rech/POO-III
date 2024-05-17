import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{

    constructor(private transportadora : Transportadora){
        console.log("Adaptando Transportadora para Correios.");
    }

    sendCorreios(): string {
        return this.transportadora.send();
    }
    receiveCorreios(): string {
        return this.transportadora.receive();
    }

}