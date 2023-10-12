
# Mocha-chai-test

Este repositório contém testes e casos de teste relacionados à apresentação para disciplina da Faculdade de tecnologia de Araras. Os testes ajudarão a garantir que o projeto funcione conforme o esperado e aprimorarão sua qualidade.

## Mocha e Chai

### Oque é Mocha? 

Mocha é um framework de teste JavaScript flexível e extensível. Ele fornece uma estrutura para organizar e executar testes de forma assíncrona e síncrona, além de oferecer suporte para diferentes estilos de escrita de testes (BDD, TDD, exports, etc.). 

### Oque é Chai?

Chai é uma biblioteca de afirmação (assertion library) para JavaScript que permite aos desenvolvedores fazer afirmações sobre o comportamento de seus códigos. Ela oferece uma variedade de estilos de escrita de testes e assertivas. 

## Para que servem? 

Mocha é usado para definir e organizar testes, permitindo que os desenvolvedores escrevam, executem e relatem resultados de testes em aplicativos JavaScript.  

Já o chai, é usado para verificar e validar os resultados esperados em seus testes Mocha (ou em outros frameworks). Ela fornece uma maneira flexível e legível de fazer afirmações sobre o código.


## Instalação

```bash
    npm install
    npm run test  
```
## Configuração do package.json

```bash
    "scripts": {
        "test": "mocha ./**/*.spec.js" // Pasta dos testes mocha
    },
```

    
