# 🚀 Strapi challenge - Murilo Pereira

Um projeto Strapi para gerenciamento de conteúdo. Este guia ajudará você a configurar, executar e explorar a API.

![Strapi Version](https://img.shields.io/badge/strapi-5.10.3-blue)
![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)
![SQLite](https://img.shields.io/badge/database-sqlite3-lightgrey)

## 📋 Pré-requisitos
- Node.js 22.x ou superior
- npm 6.x ou superior

---

## 🛠️ Configuração Inicial
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuuser/strapi-project.git
   cd strapi-project
   cd strapi
   ```
2. **Configure o servidor:**
   Siga o exemplo de .env.example para montar o arquivo .env
2. **Instale as dependências e rode o projeto:**
   ```bash
   npm install
   ```

## ▶️ Execução
**Start Strapi**:
   ```bash
   npm run dev
   ```
Painel Admin: http://localhost:1337/admin
(Crie um usuário superadmin na primeira execução)

## 🌐 Documentação da API via Swagger


1. **Acesse a Interface do Swagger**:
   - Após iniciar o servidor, visite:  
     [http://localhost:1337/documentation/v1.0.0](http://localhost:1337/documentation/v1.0.0)
   - Todas as rotas disponíveis serão listadas com detalhes de parâmetros e respostas.

2. **Autenticação**:
   - **Passo 1**: Obtenha um token JWT usando o endpoint:  
     ```http
     POST /auth/local
     ```
     Corpo da requisição (JSON):
     ```json
     {{
       "identifier": "seu@email.com",
       "password": "sua_senha"
     }}
     ```
   - **Passo 2**: No Swagger UI, clique no botão **Authorize** (🔒) no topo da página.  
     Insira: `Bearer SEU_TOKEN_JWT_AQUI`

3. **Teste as Requisições**:
   - Expanda qualquer endpoint, clique em **Try it out** e preencha os parâmetros necessários.
   - Exemplo de uso após autenticação:  
     ```http
     POST /api/posts
     ```
---
