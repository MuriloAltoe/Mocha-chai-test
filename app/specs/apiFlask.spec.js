const chai = require('chai');
const axios = require('axios');

describe('Teste com api em flask', () => {
    it('Testar resposta', async () => {
        
        const response = await axios.get('http://127.0.0.1:5000/api/item');
       
        chai.expect(response.status).to.equal(200);

        chai.expect(response.data).to.have.property('resposta').to.equal('olá mundo');
        
    });


});