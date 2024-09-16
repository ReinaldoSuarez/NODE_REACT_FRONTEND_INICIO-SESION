import { createConnection } from "mysql";

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios'
});

//mensaje de conexión a la Base de Datos
db.connect((err)=> {
    if (err){
        console.error ('No conectado a la base de datos', err);
        return
   }
   console.log('Conexión Exitosa')
})

//consultar a la base de datos
db.query(' SELECT * FROM paciente', (err, rows) =>{
    if (err){
        console.error ('error en la consulta', err);
        return
   }
   console.log('Los resultados de la consulta');
   console.log (rows)
})