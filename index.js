import express from "express";
import mysql from 'mysql2/promise';
import cors from 'cors';



// Creando el servidor
const app = express();
app.use(cors());
//conección a la BD
const pool = mysql.createPool({
host: 'localhost',
user: 'root',
database: 'sena',
});


// Creando consultas
app.get('/', (req, res) => res.send('ESTA FUNCIONANDO EL SERVIDOR'));

app.get('/login', async (req, res) =>{
  const datos = req.query
  try{
    const [results, fields] = await pool.query
      (
        'SELECT * FROM `usuarios` WHERE `correo` = ? AND `contraseñ` = ?',
        [datos.correo, datos.contraseñ]
      );

      if(results.length >0){
        res.status(200).send('INICIO DE SESION CORRECTO')
        
      }else{
        res.status(401).send('NO SE INICIO SESION')

      }

        console.log(results);
        console.log(fields);
  }     catch (err) {
        console.log(err);
  }
        console.log(datos);

  })


// Imprimir respuesta
app.listen(3000)
console.log("SERVIDOR EN EL PUERTO", 3000);

//configuración para insertar las imagenes y estilos
app.use(express.static('public'));