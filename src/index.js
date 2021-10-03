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
app.use(ruta_pedidos);

//Port
const port = config.get('SERVER.port');

//Levantamiento
 app.listen(port || 5000, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
 });

 