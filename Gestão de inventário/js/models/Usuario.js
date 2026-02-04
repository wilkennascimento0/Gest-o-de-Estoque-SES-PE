// js/models/Usuario.js

export class Usuario {
    constructor(nome, email, senha, setor, tipo = 'solicitante') {
        this.nome = nome;
        this.email = email;
        this.senha = senha; // Nota: Em um sistema real, isso seria criptografado!
        this.setor = setor;
        this.tipo = tipo; // 'admin' ou 'solicitante'
        this.dataCadastro = new Date().toISOString();
    }
}