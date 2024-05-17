import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    constructor(private mercadoPago : MercadoPago){
        console.log("Adaptando Mercado Pago no PayPal");
    }

    authtoken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.sendPayment();
    }
    paypalReceive(): void {
        this.mercadoPago.receivePayment();
    }

}