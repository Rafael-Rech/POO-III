import Token from "../../utils/Token";

export default interface IPayPalPayment{
    authtoken() : Token;
    paypalPayment() : void;
    paypalReceive() : void;
}