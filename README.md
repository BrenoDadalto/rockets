# Lançamento de Foguetes

Aplicação de lançamento de foguete 🚀 (**Incompleta/Erro**).

## Implantação

O projeto foi divido em 2 partes, a parte de back-end **API** e a parte de front-end **WEB**

### ⚙ API

Instalado algumas dependências e bibliotecas para o desenvolvimento.

```
$ npm install cors express mongoose nodemon
```

* [Cors](https://www.npmjs.com/package/cors#installation) para a política de segurança de http request;
* [Express](https://expressjs.com/pt-br/starter/installing.html) gerencia rotas, utilitários HTTP e middleware;
* [Mongoose](https://mongoosejs.com/docs/index.html) estabelece a conexão com o banco de dados MongoDB;
* [Nodemon](https://www.npmjs.com/package/nodemon) automaticamente reinicia a aplicação em caso de alteração.

A Apí executa localmente (localhost:5000) e acessa o banco de dados local MongoDB (nome da database utilizada é 'rockets').

* Acessando direto a raiz localhost:5000/ pelo método GET -> rota de teste retornando uma mensagem de teste;
* Acessando localhost:5000/usuario pelo método GET -> acesso a todos os usuários cadastrados;
* Acessando localhost:5000/usuario pelo método POST -> insere o usuário;

**Obs**.: Apenas as operações de read e create do usuário estão disponíveis.

## 🌍 Web

Instalado algumas dependências e bibliotecas para o desenvolvimento.

```
$ npx create-react-app nome-do-app
```
```
$ npm install react-router-dom@6
```
```
$ npm install axios
```

* [ReactJs](https://pt-br.reactjs.org/) biblioteca usada para criar o front-end;
* [React Router Dom](https://reactrouter.com/docs/en/v6/getting-started/installation) usado para criar as rotas das páginas e url's da aplicação front-end;
* [Axios](https://www.npmjs.com/package/axios#installing) cliente http para fazer requisições (usado para acessar a API criada no back-end).

### 🔩 Rotas

A aplicação web executa localmente (localhost:3000) e possui as seguintes rotas:

* /login - Tela de login;
* /cadastro - Tela de cadastro;
* /confirmar-idade - Tela que confirma a idade do usuário após login;
* /dashboard - Tela de seleção de foguete;
* /programar-lancamento - Tela de informe de lucro e data de lançamento;
* /lancamentos - Tela de lançamentos realizados.

### ❌ Erros

Após criar a API e tentar fazer as requisições de request para gravar no banco, tive problemas com o **cors**, com a instalação do cors no npm e mudando suas **options** o problema da request foi solucionado, porém, no console do DevTools do chrome, ele retorna um erro de status 422 (Unprocessable Entity).

## 📄 Licença

Este projeto está sob a licença MIT Open Source - acesse o [link](https://opensource.org/licenses/MIT) para detalhes.
