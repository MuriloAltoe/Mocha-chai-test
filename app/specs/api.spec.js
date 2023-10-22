const { exec } = require('child_process');
const chai = require('chai');
const axios = require('axios');

const app = require('../app/api');
const { json } = require('express');

const App = app
let server

describe('Teste de API', () => {

    // Antes do teste
    before(() => {
        server = App.listen(3000);
    });

    // Após o teste
    after(() => {
        server.close();
    });

    it('Testa a inserção de dados', async () => {
        
        const headers = {
            "Item": 1
        };
      
        const requisicao = {
            headers: headers,
        };
      
        const response = await axios.post('http://localhost:3000/items', requisicao);

        chai.expect(response.status).to.equal(201);
      
    });

    it('Testa a deleção de dados', async () => {

        const response = await axios.delete('http://localhost:3000/items');

        chai.expect(response.status).to.equal(204);

    });

    it('Testa a requisição de dados', async () => {

        const requisicao = {
            "id":1
        }

        const response = await axios.get('http://localhost:3000/items', requisicao);

        chai.expect(response.status).to.equal(200);
        // chai.expect(response.json).to.equal();
        
    });

});
