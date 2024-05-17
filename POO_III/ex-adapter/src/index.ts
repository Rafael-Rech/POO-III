import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

let correios : ICorreios = new TransportadoraAdapter(new Transportadora());

correios.receiveCorreios();
correios.sendCorreios();
