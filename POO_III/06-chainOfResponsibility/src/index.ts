import CheckEmailMiddleware from "./middlewares/CheckEmailMiddleware";
import CheckPasswordMiddleware from "./middlewares/CheckPasswordMiddleware";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import * as readline from "readline"

declare var process;
const server = new Server();

function setPromptQuestions(){
    const rl = readline.createInterface({
        input: process.stdin, output : process.stdout
    });

    rl.question("Digite o email: ", email => {
        rl.question("Digite a senha: ", password => {
            server.logIn(email, password);
            rl.close();
        })
    });

    rl.on("close", () => setPromptQuestions());
}

const emailMiddleware = new CheckEmailMiddleware();
const passwordMiddleware = new CheckPasswordMiddleware();
const userMiddleware = new CheckUserMiddleware();
const permissionMiddleware = new CheckPermissionMiddleware();
emailMiddleware.linkWith(passwordMiddleware);
passwordMiddleware.linkWith(userMiddleware);
userMiddleware.linkWith(permissionMiddleware);
server.setMiddleware(emailMiddleware);
setPromptQuestions();