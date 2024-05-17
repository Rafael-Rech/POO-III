import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayoneerPayment from "./payoneer/interfaces/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/interfaces/IPayPalPayment";
import PayPal from "./paypal/PayPal";

const payment : IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();
