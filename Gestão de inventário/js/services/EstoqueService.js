// js/services/EstoqueService.js

import { StorageUtil } from '../utils/StorageUtil.js';

export class EstoqueService {
    constructor() {
        this.KEY_ESTOQUE = 'ses_estoque'; // Chave para salvar no navegador
    }

    /**
     * Retorna todos os itens salvos.
     * Se não tiver nada, retorna uma lista vazia.
     */
    listarTodos() {
        return StorageUtil.getItem(this.KEY_ESTOQUE) || [];
    }

    /**
     * Adiciona um novo item à lista
     */
    adicionar(item) {
        const estoque = this.listarTodos();
        estoque.push(item);
        StorageUtil.setItem(this.KEY_ESTOQUE, estoque);
    }

    /**
     * Remove um item pelo ID
     */
    remover(id) {
        let estoque = this.listarTodos();
        estoque = estoque.filter(item => item.id !== id);
        StorageUtil.setItem(this.KEY_ESTOQUE, estoque);
    }
}