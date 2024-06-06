import Database from "../servers/DatabaseItem";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        const user = Database.filter(item => item.email === email);
        if(user[0].permission === PermissionType.ADMIN){
            console.log("Seja bem vindo, Administrador!");
        } else {
            console.log("Seja bem vindo, Usuário");
        }
        return this.checkNext(email, password);
    }
}