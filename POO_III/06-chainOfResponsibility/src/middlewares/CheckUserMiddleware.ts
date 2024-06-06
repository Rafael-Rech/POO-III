import Database from "../servers/DatabaseItem";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(!Database.filter(item => item.email === email && item.password === password).length){
            console.log("Usuário não encontrado!");
            return false;
        }
        return this.checkNext(email, password);
    }
}