import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

var cliente : Cliente;
var telefones : Array<Telefone>;
var endereco : Endereco;
var venda : Venda;
var produtos : Array<Produto>;

telefones = new Array<Telefone>;
telefones.push(new Telefone("11", 400289222 , "Telefone fixo"));
telefones.push(new Telefone("42", 888888728 , "Celular"));
console.log("(" + telefones[0].ddd + ")" + telefones[0].numero);
console.log("(" + telefones[1].ddd + ")" + telefones[1].numero);

endereco = new Endereco("Rua Padre Salvatore Renna", 875, "Guarapuava", "Paraná");
console.log('\n');
console.log(endereco.rua + " - " + endereco.numero + ", " + endereco.cidade + " - " + endereco.estado);

cliente = new Cliente("Antedeguemon", 90737364041, 29022000, "Masculino", endereco, telefones);
console.log('\n');
console.log(cliente.nome + ", cpf: " + cliente.cpf + ", sexo: " + cliente.sexo);

produtos = new Array<Produto>;
produtos.push(new Produto(733, "Telefone Nokia \"Tijolão\"", 499.99));
produtos.push(new Produto(487, "Garrafa de Água Mineral 500ml", 2.99));
produtos.push(new Produto(211, "Betoneira", 1233.99));
console.log('\n');
for(let i : number = 0; i < produtos.length; i++){
    console.log(produtos[i].descricao + ", valor = R$" + produtos[i].valor);
}

venda = new Venda(505, 19042024, cliente, produtos);
console.log('\n');
console.log("Venda de código " + venda.codigo + ", total =  R$" + venda.calcularTotal());
