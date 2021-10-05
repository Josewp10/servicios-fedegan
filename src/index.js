process.env.NODE_CONFIG_DIR = './src/config';

//Import dependencies
const express = require('express');
const cors = require('cors');
const config = require('config');

//Initialize express
const app = express();

app.use(express.json());
app.use(cors());

//Endpoint
app.get('/', (req,res) =>{
    res.send('API servicios fedegan');
});

//routes
const ruta_pedidos = require('./libs/pedidos/routes/pedidos');
const ruta_socios = require('./libs/socios/routes/socios');
const ruta_productos = require('./libs/productos/routes/productos');
const ruta_notificaciones = require('./libs/notificaciones/routes/notificaciones');
const ruta_catalogo = require('./libs/catalogo/routes/catalogo');
const ruta_formularios = require('./libs/formularios/routes/formularios');
const ruta_citas = require('./libs/citas/routes/citas');
const ruta_pagos = require('./libs/pagos/routes/pagos');
const ruta_federaciones = require ('./libs/federaciones/routes/federaciones');
const ruta_vacunadores = require('./libs/vacunadores/routes/vacunadores');
const ruta_facturaciones = require('./libs/facturaciones/routes/facturaciones');
const ruta_solicitantes = require('./libs/solicitantes/routes/solicitantes');

app.use(ruta_federaciones);
app.use(ruta_vacunadores);
app.use(ruta_facturaciones);
app.use(ruta_pagos);
app.use(ruta_citas);
app.use(ruta_formularios);
app.use(ruta_catalogo);
app.use(ruta_socios);
app.use(ruta_pedidos);
app.use(ruta_productos);
app.use(ruta_notificaciones);
app.use(ruta_solicitantes);

//Port
const port = config.get('SERVER.port');

//Levantamiento
 app.listen(port || 5000, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
 });
