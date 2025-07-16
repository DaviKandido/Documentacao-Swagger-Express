
# Material de apoio Documentação por Swagger 

### OpenApi e Swagger

### O que é OpenAPI?

A Especificação OpenAPI (anteriormente Especificação Swagger) é um formato de descrição de API para APIs REST. Um arquivo OpenAPI permite descrever toda a sua API, incluindo:

- Pontos de extremidade disponíveis ( /users) e operações em cada ponto de extremidade ( GET /users, POST /users)
- Parâmetros de operação Entrada e saída para cada operação
- Métodos de autenticação
- Informações de contato, licença, termos de uso e outras informações.

As especificações da API podem ser escritas em YAML ou JSON. O formato é fácil de aprender e legível tanto para humanos quanto para máquinas.

### O que é o Swagger? 

O Swagger é um conjunto de ferramentas de código aberto desenvolvido com base na especificação OpenAPI que pode ajudar você a projetar, construir, documentar e consumir APIs REST. As principais ferramentas do Swagger incluem:

- Swagger Editor – editor baseado em navegador onde você pode escrever definições OpenAPI.
- Swagger UI – renderiza definições OpenAPI como documentação interativa.
- Swagger Codegen – gera stubs de servidor e bibliotecas de cliente a partir de uma definição OpenAPI.
- Swagger Editor Next (beta) – editor baseado em navegador onde você pode escrever e revisar definições OpenAPI e AsyncAPI.
- Swagger Core – bibliotecas relacionadas a Java para criar, consumir e trabalhar com definições OpenAPI.
- Swagger Parser – biblioteca autônoma para analisar definições OpenAPI.
- Swagger APIDom – fornece uma estrutura única e unificadora para descrever APIs em várias linguagens de descrição e formatos de serialização.


### Por que usar OpenAPI?

A capacidade das APIs de descrever sua própria estrutura é a raiz de toda a excelência do OpenAPI. Uma vez escritas, uma especificação OpenAPI e as ferramentas Swagger podem impulsionar o desenvolvimento da sua API de várias maneiras:

- Usuários que priorizam o design: usem o Swagger Codegen para gerar um stub de servidor para sua API. A única coisa que resta é implementar a lógica do servidor – e sua API estará pronta para ser lançada!
- Use o Swagger UI para gerar documentação de API interativa que permite que seus usuários experimentem chamadas de API diretamente no navegador.
- Use a especificação para conectar ferramentas relacionadas à API à sua API. Por exemplo, importe a especificação para o SoapUI para criar testes automatizados para sua API.


## Estrutura básica

- Você pode escrever definições OpenAPI em YAML ou JSON 


```yaml
openapi: 3.0.4
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9

servers:
  - url: http://api.example.com/v1
    description: Optional server description, e.g. Main (production) server
  - url: http://staging-api.example.com
    description: Optional server description, e.g. Internal staging server for testing

paths:
  /users:
    get:
      summary: Returns a list of users.
      description: Optional extended description in CommonMark or HTML.
      responses:
        "200": # status code
          description: A JSON array of user names
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string
```

## Metadados

- Versão da Especificação OpenAPI na qual esta definição se baseia

```yaml
openapi: 3.0.4
```


- A info seção contém informações da API: title, description(opcional), version:

```yaml
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9
```