import Token from "../../utils/Token";

export default interface IMercadoPagoPayment{
    authToken() : Token;
    sendPayment() : void;
    receivePayment() : void;
}