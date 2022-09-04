import express from "express";
import {crud_estudiantes} from "./controller/crudEstudiantes.js"
import {portfolio} from "./controller/portfolioController.js"
const app_express = express();
app_express.use(express.urlencoded({extended:false}));
app_express.use(express.json());
app_express.set('views','./view');
app_express.set('view engine', 'ejs');

app_express.listen('8082',()=>{
    console.log('Aplicacion Iniciada: http://localhost:8082');
})

app_express.get('/',crud_estudiantes.leer)
app_express.get('/portfolio',portfolio.index)
app_express.post('/crud_estudiantes',crud_estudiantes.crud)