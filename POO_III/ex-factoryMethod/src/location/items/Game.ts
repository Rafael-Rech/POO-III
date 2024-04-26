import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Jogo: locação iniciada.");
    }
    getDescription(): void {
        console.log("Jogo: Tetris");
        console.log("Tetris começa com uma tela vazia, e requer que o jogador encaixe blocos em queda, como em um quebra-cabeça. Existem sete formas compostas de quatro blocos cada, e eles caem pelo espaço um de cada vez com uma velocidade fixa. O objetivo do jogador é rotacionar as formas conforme elas caem para completar linhas sólidas sem espaços vazios.");
        console.log();
    }
}