//aquí conectamos el servidor mongodb y las bases de datos de mongodb compas
import mongoose, { Mongoose } from "mongoose";

//Creamos una constante con valor: la url de las bases de datos de mongo compass

const db_url='mongodb://127.0.0.1:27017/CLINICA';

mongoose.connect (db_url)

.then (() => {
    console.log (' conectado a la base de datos Mongo')
})

.catch ((err) =>{
    console.error('error al conectar a la base de datos', err)    
})

//Consulta a la base de datos
const pacientesSchema= new mongoose.Schema({
    Nombre:{type: String, required: true},
    Email: {type: String, required: true},
    Edad: {type: Number, required: true},
});

const pacientes = mongoose.model("pacientes", pacientesSchema);
pacientes.find()

.then ((pacientes) => {

    console.log ('PACIENTES CONECTADOS', pacientes)
})

.catch ((err) =>{
    console.error('ERROR AL CONECTAR LA CONSULTA', err)    
})