# Lançamento de Foguetes

Aplicação de lançamento de foguete 🚀 (**Incompleta**).

## Implantação

O projeto foi divido em 2 partes, a parte de back-end **API** e a parte de front-end **WEB**

### ⚙ API

Instalado algumas dependências e bibliotecas para o desenvolvimento.

```
$ npm install cors express mongoose nodemon
```

* [Cors](https://www.npmjs.com/package/cors#installation) para a política de segurança de http request;
* [Express](https://expressjs.com/pt-br/starter/installing.html) gerencia rotas, utilitários HTTP e middleware;
* [Mongoose](https://mongoosejs.com/docs/index.html) estabele a conexão com o banco de dados MongoDB;
* [Nodemon](https://www.npmjs.com/package/nodemon) automaticamente reinicia a aplicação em caso de alteração.

A Apí executa localmente (localhost:5000) e acessa o banco de dados local MongoDB (nome da database utilizada é 'rockets').

* Acessando direto a raiz localhost:5000/ pelo método GET -> rota de teste retornando uma mensagem de teste;
* Acessando localhost:5000/usuario pelo método GET -> acesso a todos os usuários cadastrados;
* Acessando localhost:5000/usuario pelo método POST -> insere o usuário;

## 🌍 Web

Instalado algumas dependências e bibliotecas para o desenvolvimento.

```
$ npx create-react-app rockets
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

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

### ⌨️ E testes de estilo de codificação

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.
