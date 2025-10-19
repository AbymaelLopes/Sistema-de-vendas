Sistema de Gestão de Vendas, Estoque e Clientes

Bem-vindo ao Sistema de Gestão! Esta é uma aplicação web completa e de página única, desenhada para pequenos negócios e trabalhadores independentes que precisam de uma forma simples e eficiente de gerir as suas operações diárias.

A aplicação é totalmente funcional offline e pode ser "instalada" no seu telemóvel ou computador, comportando-se como uma aplicação nativa. Todos os dados são guardados localmente no seu dispositivo, garantindo privacidade e acesso rápido.

✨ Funcionalidades Principais

O sistema está dividido em três áreas principais para uma gestão organizada:

1. 📈 Vendas

Registo Rápido: Adicione produtos ao carrinho, selecione um cliente e finalize a venda em segundos.

Cálculo Automático: O total da venda é calculado em tempo real.

Histórico Completo: Todas as vendas ficam registadas com data, hora, itens, total e o cliente associado.

2. 📦 Estoque

Adicionar Produtos: Registe facilmente novos produtos com nome, preço e quantidade inicial.

Gestão de Inventário: Visualize todos os produtos, os seus preços e a quantidade disponível.

Atualização Fácil: Edite o preço e a quantidade em estoque de qualquer produto através de uma janela de edição intuitiva.

Remoção de Itens: Apague produtos que já não comercializa.

3. 👥 Clientes

Base de Clientes: Crie um registo dos seus clientes com nome, telefone e e-mail.

Associação de Vendas: Associe vendas a clientes específicos para um melhor acompanhamento.

Gestão Simples: Adicione ou remova clientes da sua lista a qualquer momento.

🚀 Como Instalar e Usar (PWA)

Esta aplicação é um Progressive Web App (PWA), o que significa que pode ser adicionada ao ecrã principal do seu dispositivo.

Pré-requisitos

Para que a funcionalidade PWA (instalação e modo offline) funcione, os ficheiros (index.html, manifest.json, service-worker.js) devem ser servidos a partir de um servidor web seguro (https://). Não irá funcionar se abrir o index.html diretamente do seu computador.

Opções de Hospedagem Gratuitas:

Netlify

Vercel

GitHub Pages

Passos para Instalação

Faça o upload dos ficheiros para um dos serviços de hospedagem acima.

Aceda ao link gerado pelo serviço no seu dispositivo.

Em Android (com Chrome)

O navegador deverá mostrar uma notificação para "Adicionar à tela inicial".

Se não aparecer, vá ao menu (três pontos) e selecione "Instalar aplicativo".

Em iOS (com Safari)

Toque no ícone de "Partilhar" (um quadrado com uma seta para cima).

No menu, selecione a opção "Adicionar à tela de Início".

Depois de instalada, a aplicação terá o seu próprio ícone e abrirá em ecrã inteiro, como qualquer outra aplicação!

🛠️ Tecnologias Utilizadas

HTML5: Estrutura da aplicação.

Tailwind CSS: Para um design moderno, responsivo e utilitário.

JavaScript (ES6+): Toda a lógica da aplicação, manipulação do DOM e gestão de dados.

LocalStorage API: Para guardar todos os dados (produtos, vendas, clientes) diretamente no navegador do utilizador.

Progressive Web App (PWA): Usando um manifest.json e um Service Worker para permitir a instalação e o funcionamento offline.

Este projeto foi desenvolvido para ser uma solução leve, sem dependências de frameworks complexos ou bases de dados externas.
