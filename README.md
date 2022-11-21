# Car Shop

## Resumo

Este projeto da [Trybe](https://www.betrybe.com/) se trata de um banco de dados NoSQL - MongoDB com informações de um “Car Shop”.

Nesta aplicação, utilizando conceitos de SOLID, foi desenvolvido o backend CRUD responsável pela manipulação desses dados. Através de uma estrutura em camadas MSC (Model, Service e Controller) e a ODM do mongoose, desenvolvidas com a metodologia de POO (Programação Orientada a Objetos) é possível fazer requisições CRUD (Create, Read, Update e Delete) para o banco de dados para cadastrar novos veículos específicos, listar todos os cadastrados, inserir um novo, assim como atualizar e deletar algum já existente.

Os testes unitários fazem a cobertura das três camadas do projeto (MSC) e foram desenvolvidos utilizando as tecnologias: Mocha, Sinon e Chai.

## Stacks utilizadas:
Backend:
> TypeScript, SOLID, Mongoose, MongoDB, Express, metodologias MSC (Model, Service e Controller), POO (Programação Orientada a Objetos), ODM mongoose (Object Data Modeling).

Testes Unitários:
> Mocha, Sinon e Chai

## Rodando o Projeto

### Instalando Dependências

> Na raiz do diretório:

```bash
npm install
```

### Executando a Aplicação

```bash
npm start
```

> Ou executando em modo de desenvolvedor:

```bash
npm run dev
```

* Para execução local do projeto é necessário ter o MongoDB instalado e iniciado
* As requisições devem ser feitas na porta 3001

### Para executar com Docker

```bash
docker-compose up -d
docker exec -it car_shop /bin/bash
npm install
```

> Executar os scripts normalmente dentro do container como é feito localmente

### Executando os Testes

```bash
npm test
```

## Autor

- [@thales-sz](https://www.github.com/thales-sz)
