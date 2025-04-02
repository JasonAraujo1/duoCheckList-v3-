# Duo Checklist

**Duo CheckList** é uma aplicação web para gerenciamento colaborativo de tarefas. Com ela, dois usuários podem criar, editar e acompanhar checklists compartilhados, facilitando a organização e a comunicação sobre tarefas e produtos.

---
<img src="./duoCheckList/src/assets/print.PNG"/>

## Sumário  

- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Funcionalidades](#funcionalidades)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Fluxo da Aplicação](#fluxo-da-aplicação)  
- [Fluxograma](#fluxograma)  
- [Design e Wireframe](#design-e-wireframe)  
- [Acesso](#acesso)  
- [Instalação e Configuração](#instalação-e-configuração)  
- [Licença](#licença)  

---

## Tecnologias Utilizadas  

O projeto foi desenvolvido utilizando as seguintes tecnologias:  

- **React & React DOM** – Criação de uma interface de usuário modular e reativa.  
- **React Router** – Gerenciamento de rotas e navegação entre páginas.  
- **Vite** – Ferramenta de build e servidor de desenvolvimento para uma experiência rápida.  
- **Tailwind CSS** – Estilização e responsividade com classes utilitárias.  
- **Bootstrap** – Utilizado para componentes e estilos adicionais.  
- **Fetch API** – Comunicação com o backend (MockAPI) para operações de CRUD.  
- **Assets gráficos** – Ícones e imagens (ex.: checkList.svg) para identidade visual.  

---

## Funcionalidades  

A aplicação oferece as seguintes funcionalidades:  

- **Cadastro de Usuário:**  
  - Formulário para criação de conta com validação dos campos.  
  - Envio dos dados para um endpoint (MockAPI) e redirecionamento para a página de login após cadastro bem-sucedido.  

- **Login:**  
  - Tela para autenticação do usuário, onde as credenciais são verificadas.  
  - Armazenamento do ID do usuário no `localStorage` e redirecionamento para a Home ao realizar login com sucesso.  

- **Página Principal (Home):**  
  - Listagem de produtos ou tarefas associados ao usuário.  
  - Filtros e busca por status, categoria e nome.  
  - Navegação para detalhes ou edição dos itens.  
  - Função de logout que limpa os dados do usuário e redireciona para a tela de login.  

- **Cadastro e Edição de Produto:**  
  - Formulário para adicionar novos produtos ou editar os existentes.  
  - Campos para nome, status (ex.: "Adquirido" / "Não Adquirido"), categoria e descrição.  
  - Atualização dos dados por meio de requisições POST (novo produto) ou PUT (edição).  

- **Comunicação com a API:**  
  - Utilização da Fetch API para realizar chamadas ao backend, encapsuladas em funções específicas para buscar usuários e produtos.  

---

## Estrutura do Projeto  

O projeto possui a seguinte estrutura básica:  

- **index.html e main.jsx:**  
  Arquivos de entrada da aplicação.

- **App.jsx:**  
  Responsável pela definição das rotas da aplicação.

- **Componentes Específicos:**  
  Cada funcionalidade (login, cadastro, listagem, cadastro/edição de produto) possui seu respectivo componente.

- **Assets e Estilização:**  
  Utiliza arquivos de imagem e bibliotecas de estilo (Tailwind CSS e Bootstrap).

---

## Fluxo da Aplicação  

1. **Inicialização:** O usuário é direcionado para a página de login ao acessar o aplicativo.  
2. **Autenticação:** O usuário é autenticado e redirecionado para a página principal.  
3. **Gerenciamento de Produtos:** O usuário pode visualizar, pesquisar, cadastrar e editar itens.  
4. **Cadastro/Edição de Produtos:** Os formulários validam e enviam os dados para o backend.  
5. **Navegação e Logout:** A navegação é feita pelo React Router e o logout limpa os dados do usuário.  

---

## Fluxograma  

Para entender visualmente o fluxo da aplicação, acesse o seguinte link:  

🔗 **Fluxograma do Duo CheckList** → [GitMind Fluxograma](https://gitmind.com/app/docs/m5jinzfc)  
<img src="/duoCheckList/src/assets/fluxograma.png"></img>
---

## Design e Wireframe  

🔗 **Wireframe do Duo CheckList** → [Moqups Wireframe](https://app.moqups.com/0v1WYebsFY33kii807RmGZYuwhvWyEbs/view/page/a7bc758b4)  

---

## Acesso  

🔗 **Duo CheckList Online** → [https://duo-check-list.vercel.app/](https://duo-check-list.vercel.app/)  

---
## Instalação e Configuração  

1. **Clone o repositório:**  
   ```sh  
   git clone https://github.com/JasonAraujo1/duoCheckList  
   ```  

2. **Acesse a pasta do projeto:**  
   ```sh  
   cd duoCheckList  
   ```  

3. **Instale as dependências:**  
   ```sh  
   npm install  
   ```  

4. **Execute o servidor de desenvolvimento:**  
   ```sh  
   npm run dev  
   ```  

---
## Licença  

Este projeto está licenciado sob a [Licença MIT](LICENSE).  

---