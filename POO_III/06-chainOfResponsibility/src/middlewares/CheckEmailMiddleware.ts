import Middleware from "./Middleware";

export default class CheckEmailMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1){
            console.log("Email inválido");
            return false;
        }
        return this.checkNext(email, password);
    }
}