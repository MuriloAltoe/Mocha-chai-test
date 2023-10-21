const { exec } = require('child_process');
const chai = require('chai');
const axios = require('axios');

const app = require('../app/api');

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

        chai.expect(response.status).to.equal(201)
      
    });
});
