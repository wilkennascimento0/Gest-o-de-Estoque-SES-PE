// js/models/Item.js

export class Item {
    constructor(nome, modelo, serie, qtd, tipo) {
        this.id = Date.now().toString(); // Cria um ID único baseado na hora atual
        this.nome = nome;
        this.modelo = modelo;
        this.serie = serie;
        this.qtd = parseInt(qtd); // Garante que é número
        this.tipo = tipo; // Ex: 'permanente' ou 'consumo'
        this.dataEntrada = new Date().toLocaleDateString('pt-BR');
    }
}