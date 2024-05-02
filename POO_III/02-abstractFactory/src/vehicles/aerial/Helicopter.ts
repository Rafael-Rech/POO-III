import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: Hélices ligadas! Iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros embarcados!");
    }
    checkWind(): void {
        console.log("Helicóptero: Ventos 42km, Sudoeste!");
    }
}