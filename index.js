const Hapi = require('hapi');
 
const host = 'localhost';
const port = 3001; 
 
const server = Hapi.Server({
    host: host,
    port: port
});
 
const init = async () => {
 
    server.route({
        method: 'GET',
        path: '/api',
        handler: function (req, h) {

            var data = {
                msg: 'Api Calculadora NodeJs'
            };

            return data;
        }
    })

    //Soma
    server.route({
        method: 'GET',
        path: '/api/calculadora/soma/{campo1}/{campo2}',
        handler: function (calculo) {

            const campoum = parseFloat(calculo.params.campo1)
            const campodois = parseFloat(calculo.params.campo2)
            var data = {
                resultado: campoum + campodois
            }

            return data;
        }
    })

    //Subtração
    server.route({
        method: 'GET',
        path: '/api/calculadora/subtracao/{campo1}/{campo2}',
        handler: function (calculo) {

            const campoum = parseFloat(calculo.params.campo1)
            const campodois = parseFloat(calculo.params.campo2)

            var data = {
                resultado: campoum - campodois
            }

            return data;
        }
    })

    //Multiplicação
    server.route({
        method: 'GET',
        path: '/api/calculadora/multiplicacao/{campo1}/{campo2}',
        handler: function (calculo) {

            const campoum = parseFloat(calculo.params.campo1)
            const campodois = parseFloat(calculo.params.campo2)

            var data = {
                resultado: campoum * campodois
            }

            return data;
        }
    })

    //Divisao
    server.route({
        method: 'GET',
        path: '/api/calculadora/divisao/{campo1}/{campo2}',
        handler: function (calculo) {

            const campoum = parseFloat(calculo.params.campo1)
            const campodois = parseFloat(calculo.params.campo2)

            var data = {
                resultado: campoum / campodois
            }

            return data;
        }
    })
    

    await server.start();
    console.log("Server na porta: " + port);
 
}
  
init();