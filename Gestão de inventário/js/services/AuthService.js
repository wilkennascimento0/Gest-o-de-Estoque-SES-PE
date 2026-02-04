// js/services/AuthService.js

import { StorageUtil } from '../utils/StorageUtil.js';
import { Usuario } from '../models/Usuario.js';

export class AuthService {
    constructor() {
        this.KEY_USUARIOS = 'ses_usuarios'; // Onde salvamos a lista de todos
        this.KEY_SESSAO = 'ses_usuario_logado'; // Onde salvamos quem está logado agora
    }

    /**
     * Tenta registrar um novo usuário
     */
    registrar(nome, email, senha) {
        // 1. Busca usuários existentes
        const usuarios = StorageUtil.getItem(this.KEY_USUARIOS) || [];

        // 2. Verifica se o email já existe
        const existe = usuarios.find(u => u.email === email);
        if (existe) {
            throw new Error("Este e-mail já está cadastrado!");
        }

        // 3. Define se é admin (se for o primeiro do sistema, vira Chefe)
        const tipo = usuarios.length === 0 ? 'admin' : 'solicitante';
        
        // 4. Cria o novo usuário usando nosso Modelo
        // Por padrão, vamos colocar o setor como "Geral" por enquanto
        const novoUsuario = new Usuario(nome, email, senha, "Geral", tipo);

        // 5. Salva na lista
        usuarios.push(novoUsuario);
        StorageUtil.setItem(this.KEY_USUARIOS, usuarios);

        return novoUsuario;
    }

    /**
     * Tenta fazer login
     */
    login(email, senha) {
        const usuarios = StorageUtil.getItem(this.KEY_USUARIOS) || [];

        // Procura alguém com esse email E essa senha
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

        if (!usuarioEncontrado) {
            throw new Error("E-mail ou senha incorretos.");
        }

        // Se achou, salva na sessão (login realizado)
        StorageUtil.setItem(this.KEY_SESSAO, usuarioEncontrado);
        return usuarioEncontrado;
    }

    /**
     * Verifica se tem alguém logado
     */
    getUsuarioLogado() {
        return StorageUtil.getItem(this.KEY_SESSAO);
    }
}