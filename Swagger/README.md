# Guia de Documentação de APIs REST com Swagger e OpenAPI

Este guia tem como objetivo ensinar como documentar APIs REST utilizando a especificação OpenAPI e as ferramentas do ecossistema Swagger. Ao final, você será capaz de criar uma documentação interativa para suas APIs Express de forma simples e prática.

---

### OpenAPI e Swagger

#### O que é OpenAPI?

A Especificação OpenAPI (anteriormente conhecida como Especificação Swagger) é um formato de descrição de API para APIs REST. Um arquivo OpenAPI permite descrever toda a sua API, incluindo:

* Endpoints disponíveis (`/users`) e operações em cada endpoint (`GET /users`, `POST /users`)
* Parâmetros de entrada e saída para cada operação
* Métodos de autenticação
* Informações de contato, licença, termos de uso e outras

As especificações podem ser escritas em **YAML** ou **JSON**, e são legíveis por humanos e máquinas.

#### O que é o Swagger?

O Swagger é um conjunto de ferramentas de código aberto desenvolvido com base na especificação OpenAPI, que ajuda você a projetar, construir, documentar e consumir APIs REST. As principais ferramentas incluem:

* **Swagger Editor** – Editor online baseado em navegador para escrever definições OpenAPI
* **Swagger UI** – Gera uma documentação interativa para APIs
* **Swagger Codegen** – Gera stubs de servidor e bibliotecas de cliente a partir de definições
* **Swagger Core** – Bibliotecas em Java para trabalhar com OpenAPI
* **Swagger Parser** – Biblioteca para analisar arquivos OpenAPI
* **Swagger APIDom** – Estrutura unificada para descrever APIs em diferentes formatos

#### Por que usar OpenAPI?

A descrição da estrutura da API é a base da proposta do OpenAPI. Depois de definida, a especificação pode ser usada para:

* Gerar stubs de servidor com o **Swagger Codegen**
* Criar documentação interativa com o **Swagger UI**
* Integrar a especificação com ferramentas como o SoapUI para testes automatizados

---

### Estrutura Básica OpenAPI (YAML)

```yaml
openapi: 3.0.4
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9

servers:
  - url: http://api.example.com/v1
    description: Servidor principal (produção)
  - url: http://staging-api.example.com
    description: Servidor de homologação interno para testes

paths:
  /users:
    get:
      summary: Retorna uma lista de usuários.
      description: Descrição estendida (opcional).
      responses:
        "200":
          description: Um array JSON com nomes de usuários
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
```

---

### Metadados Essenciais

```yaml
openapi: 3.0.4
```

Indica a versão da especificação utilizada.

```yaml
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9
```

Contém as informações básicas da API.

---

### Exemplo: Documentação de uma API Express com Swagger

#### Instalação

```bash
npm install swagger-ui-express swagger-jsdoc
```

#### Arquivo `app.js`

```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Exemplo de API Express com Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Caminho para arquivos com comentários JSDoc
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

#### Exemplo de Comentário com JSDoc em `routes/user.js`

```js
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
app.get('/users', (req, res) => {
  res.json(['Alice', 'Bob']);
});
```

---

### Links Úteis

* [Editor Online do Swagger](https://editor.swagger.io/)
* [Documentação Oficial OpenAPI](https://spec.openapis.org/oas/latest.html)
* [Swagger UI no GitHub](https://github.com/swagger-api/swagger-ui)
* [swagger-jsdoc (npm)](https://www.npmjs.com/package/swagger-jsdoc)
* [swagger-ui-express (npm)](https://www.npmjs.com/package/swagger-ui-express)

---

📚 *Com essas ferramentas, você poderá criar APIs bem documentadas, interativas e profissionais, facilitando o desenvolvimento e a integração com outros serviços.*

