// js/utils/StorageUtil.js

/**
 * Utilitário para gerenciar operações de leitura e escrita no LocalStorage.
 */
export class StorageUtil {
    /**
     * Salva um valor no LocalStorage.
     * @param {string} key A chave para armazenar o valor.
     * @param {any} value O valor a ser armazenado. Objetos serão stringificados.
     */
    static setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Erro ao salvar no LocalStorage para a chave ${key}:`, e);
        }
    }

    /**
     * Recupera um valor do LocalStorage.
     * @param {string} key A chave do valor a ser recuperado.
     * @returns {any | null} O valor recuperado, ou null se não for encontrado ou houver erro.
     */
    static getItem(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error(`Erro ao ler do LocalStorage para a chave ${key}:`, e);
            return null;
        }
    }

    /**
     * Remove um item do LocalStorage.
     * @param {string} key A chave do item a ser removido.
     */
    static removeItem(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error(`Erro ao remover do LocalStorage para a chave ${key}:`, e);
        }
    }
}