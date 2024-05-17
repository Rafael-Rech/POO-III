import Token from "../utils/Token";
import IPayPalPayment from "./interfaces/IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token : Token;

    authtoken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authtoken();
        console.log("TOKEN:  " + this.token.token);
        console.log("Enviando pagamento via PayPal");
    }
    paypalReceive(): void {
        console.log("Recebendo pagamento via PayPal");
    }
}