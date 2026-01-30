Sistema de Gestão de Vendas, Estoque e Clientes

Bem-vindo ao Sistema de Gestão! Esta é uma aplicação web completa e de página única, desenhada para pequenos negócios e trabalhadores independentes que precisam de uma forma simples e eficiente de gerir as suas operações diárias.

A aplicação é um PWA (Progressive Web App) conectado ao Supabase, permitindo que os seus dados estejam seguros na nuvem e acessíveis em qualquer dispositivo.

✨ Funcionalidades Principais

1. 📈 Vendas

Registo Rápido: Adicione produtos ao carrinho, selecione um cliente e finalize a venda.

Descontos: Aplique descontos individuais por item no momento da venda.

Vendas a Prazo: Opção de vender "fiado", gerando automaticamente uma pendência no financeiro.

Comprovativos: Gere comprovativos em formato de imagem (JPG) prontos para partilhar via WhatsApp ou redes sociais.

2. 📦 Estoque

Gestão de Preços: Defina o preço de custo e o markup para calcular automaticamente o preço de venda (ou vice-versa).

Busca em Tempo Real: Localize produtos rapidamente através da barra de pesquisa.

Controlo de Quantidade: Edite níveis de estoque e preços de forma intuitiva.

3. 👥 Clientes

Base de Dados: Registe nome, telefone e e-mail dos seus clientes.

Histórico Financeiro: Saiba exatamente o que cada cliente comprou e quanto deve.

4. 💰 Financeiro (Contas a Receber)

Gestão de Dívidas: Visualize todas as vendas a prazo pendentes.

Baixas Parciais: Registe pagamentos parciais; o sistema abate o valor e mantém o saldo devedor atualizado até à quitação total.

5. 📊 Relatórios

Lucro Real: Acompanhe a sua rentabilidade baseada no custo vs venda.

Visão Geral: Gráficos de vendas por período e métodos de pagamento preferidos.

🚀 Instalação

Configure o seu projeto no Supabase e execute os scripts SQL de migração.

Insira a sua SUPABASE_URL e SUPABASE_ANON_KEY no ficheiro index.html.

Hospede os ficheiros num servidor HTTPS (GitHub Pages, Netlify, etc.).

Abra o link no telemóvel e selecione "Adicionar ao ecrã inicial".

Este projeto utiliza Tailwind CSS para o design, Chart.js para relatórios e html2canvas para a geração de imagens.
