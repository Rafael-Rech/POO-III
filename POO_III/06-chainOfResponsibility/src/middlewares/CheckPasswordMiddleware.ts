import Middleware from "./Middleware";

export default class CheckPasswordMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(password.length < 6){
            console.log("Senha fraca, a senha deve ter no mínimo 6 caracteres!");
            return false;
        }
        return this.checkNext(email, password);
    }
}