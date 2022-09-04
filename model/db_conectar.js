import mysql from 'mysql';

var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'usr_tarea',
    password: 'Admin123',
    database: 'db_tarea'
});

conectar.connect(function(err) {
    if (err) {
        console.log("Error en la conexion:"+err.stack);
        return;
    } else {
        console.log('Conexion Exitosa ID: ' + conectar.threadId);
    }
});
export {conectar};