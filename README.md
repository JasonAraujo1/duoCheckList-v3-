# Duo Checklist


**Duo CheckList** é uma aplicação web para gerenciamento colaborativo de tarefas. Com ela, dois usuários podem criar, editar e acompanhar checklists compartilhados, facilitando a organização e a comunicação sobre tarefas e produtos.

---
<img src="./duoCheckList/src/assets/print.PNG"/>
 



## Sumário  

- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Funcionalidades](#funcionalidades)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Fluxo da Aplicação](#fluxo-da-aplicação)  
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
  - Formulário para criação de conta com validação dos campos (nome sem espaços desnecessários, senha com confirmação e tamanho mínimo).  
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
  Arquivos de entrada da aplicação. O `index.html` define o contêiner principal (`root`), enquanto o `main.jsx` renderiza o componente principal dentro do contexto do `BrowserRouter`.  

- **App.jsx:**  
  Responsável pela definição das rotas da aplicação. Algumas das principais rotas são:  
  - `/` – Página de Login.  
  - `/register` – Página de Cadastro de Usuário.  
  - `/home` – Página Principal (listagem de produtos).  
  - `/new` – Página para cadastro de um novo produto.  
  - `/edit` – Página para edição de um produto existente.  
  - `/product` – Página de detalhes do produto.  

- **Componentes Específicos:**  
  Cada funcionalidade (login, cadastro, listagem, cadastro/edição de produto) possui seu respectivo componente, que realiza validações e integrações com o backend.  

- **Assets e Estilização:**  
  São utilizados arquivos de imagem (ícones, logotipos) e bibliotecas de estilo (Tailwind CSS e Bootstrap) para definir a aparência e responsividade da interface.  

---


## Fluxo da Aplicação  

1. **Inicialização:**  
   O usuário é direcionado para a página de login ao acessar o aplicativo.  

2. **Autenticação:**  
   Após inserir suas credenciais, o usuário é autenticado e seu ID é armazenado no `localStorage`, redirecionando-o para a página principal.  

3. **Gerenciamento de Produtos:**  
   Na página Home, o usuário visualiza a lista de produtos/tarefas e pode aplicar filtros, pesquisar itens ou navegar para as páginas de cadastro e edição.  

4. **Cadastro/Edição de Produtos:**  
   As páginas de cadastro e edição apresentam formulários com validação e, ao enviar, os dados são enviados para o backend por meio de requisições HTTP.  

5. **Navegação e Logout:**  
   A navegação entre as páginas é feita pelo React Router, e o botão de logout limpa os dados do usuário e retorna à tela de login.  

---

## Design e Wireframe  

O design da aplicação foi criado utilizando wireframes interativos para guiar a experiência do usuário e a estrutura visual. Para visualizar o layout do projeto, acesse o link:  

🔗 **Wireframe do Duo CheckList** → [Moqups Wireframe](https://app.moqups.com/0v1WYebsFY33kii807RmGZYuwhvWyEbs/view/page/a7bc758b4)  

O wireframe mostra as telas principais do sistema, incluindo:  

- Tela de Login  
- Tela de Cadastro  
- Página Home com listagem de tarefas  
- Tela de Cadastro/Edição de produtos  
- Página de Detalhes do Produto  

O design segue um layout limpo e intuitivo, facilitando a navegação e experiência do usuário.  

---

## Acesso  

Você pode acessar a versão hospedada da aplicação através do link:  

🔗 **Duo CheckList Online** → [https://duo-check-list.vercel.app/](https://duo-check-list.vercel.app/)  

---
## Instalação e Configuração  

Para rodar o projeto em sua máquina, siga os passos abaixo:  

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

Os scripts disponíveis no `package.json` incluem também comandos para build, lint e preview.  

---
## Base Teórica  
- Essa documentação segue os princípios do livro [Modern technical writing: an introduction to software documentation](https://cdn.zlibrary.to/v1/files/3a191877-ec33-45c8-b0f8-f9d943dae86e/download?t=chCCFUwh5Xdbk41h6ZkNG6GEDGEYq90w).  
---

## Licença  

Este projeto está licenciado sob a [Licença MIT](LICENSE).  

---

