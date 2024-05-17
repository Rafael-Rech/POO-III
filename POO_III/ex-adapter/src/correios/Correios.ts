import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    private _trackingCode : string;

    private generateTrackingCode() : void{
        var letras : string = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65)) + String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
        var numeros : string = String(Math.floor(Math.random() * (1000000000)));
        while(numeros.length < 9){
            numeros = "0" + numeros;
        }
        this._trackingCode = letras  + numeros + "BR";
    }
    
    public sendCorreios(): string {
        this.generateTrackingCode();
        console.log("Correios: pacote recebido e pronto para iniciar entrega para o destinatário, código de rastreio: " + this._trackingCode);
        return this._trackingCode;
    }
    public receiveCorreios(): string {
        this.generateTrackingCode();
        console.log("Correios: entrega autorizada, pacote saindo para entrega até você, código de rastreio: " + this._trackingCode);
        return this._trackingCode;
    }
}