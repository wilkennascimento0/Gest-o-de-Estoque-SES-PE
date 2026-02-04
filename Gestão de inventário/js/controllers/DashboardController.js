// js/controllers/DashboardController.js

import { AuthService } from '../services/AuthService.js';

const authService = new AuthService();

// 1. Verificar se tem alguém logado. Se não tiver, chuta de volta pro login.
const usuarioLogado = authService.getUsuarioLogado();

if (!usuarioLogado) {
    alert("Você precisa estar logado!");
    window.location.href = "index.html";
} else {
    // 2. Se tiver logado, mostra o nome na tela
    document.getElementById('userNomeDisplay').innerText = usuarioLogado.nome;
    document.getElementById('userTipoDisplay').innerText = usuarioLogado.tipo;
}

// 3. Botão de Sair (Logout)
document.getElementById('btnLogout').addEventListener('click', () => {
    // Aqui vamos criar o método de logout depois, por enquanto só limpa e redireciona
    localStorage.removeItem('ses_usuario_logado'); // Usando a chave direta por enquanto
    window.location.href = "index.html";
});








document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menuSolicitacoes').addEventListener('click', () => {
        window.location.href = 'requests.html';
    });

    document.getElementById('menuEstoque').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
    document.getElementById('menuUsuarios').addEventListener('click', () => {
        window.location.href = 'users.html';
    });
});

