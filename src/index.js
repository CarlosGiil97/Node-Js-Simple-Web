// const express = require('express'); versión sin imports ni exports

import express from 'express';
import {dirname, join} from 'path'; //join para concatenar directorios
import { fileURLToPath } from 'url';
import indexRoutes from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs') //establecer nueva configuración (html con caracteristicas extras)
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))
app.listen(process.env.PORT || 3000) //especificarle en que puerto va a estar escuchando la app



console.log('Escuchando en el puerto', 3000)