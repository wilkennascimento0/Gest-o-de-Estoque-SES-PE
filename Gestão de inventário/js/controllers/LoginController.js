// js/controllers/LoginController.js

import { AuthService } from '../services/AuthService.js';

// Iniciamos o serviço
const authService = new AuthService();

// Elementos da tela (DOM)
const loginForm = document.getElementById('loginForm');
const cadastroForm = document.getElementById('cadastroForm');
const loginCard = document.querySelector('.login-card');
const cadastroCard = document.querySelector('.cadastro-card');
const linkCadastro = document.getElementById('linkCadastro');
const linkLogin = document.getElementById('linkLogin');

// --- FUNÇÕES DE INTERFACE ---

// Função para mostrar mensagens (Toast) - vamos criar uma simples aqui
function mostrarErro(mensagem) {
    alert(mensagem); // Por enquanto vamos de alert, depois melhoramos pro Toast bonito
}

function alternarTelas() {
    loginCard.classList.toggle('hidden');
    cadastroCard.classList.toggle('hidden');
}

// --- EVENTOS (CLIQUES E ENVIOS) ---

// 1. Clique no link "Cadastre-se aqui"
linkCadastro.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que o link recarregue a página
    alternarTelas();
});

// 2. Clique no link "Faça login"
linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    alternarTelas();
});

// 3. Quando enviar o formulário de CADASTRO
cadastroForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Não deixa a página recarregar

    const nome = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const senha = document.getElementById('senhaCadastro').value;

    try {
        authService.registrar(nome, email, senha);
        alert("Cadastro realizado com sucesso! Faça login.");
        alternarTelas(); // Volta pra tela de login
        cadastroForm.reset(); // Limpa os campos
    } catch (erro) {
        mostrarErro(erro.message);
    }
});

// 4. Quando enviar o formulário de LOGIN
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    try {
        const usuario = authService.login(email, senha);
        alert(`Bem-vindo(a), ${usuario.nome}!`);
        // Redireciona para o painel principal
        window.location.href = "dashboard.html"; 
    } catch (erro) {
        mostrarErro(erro.message);
    }
});