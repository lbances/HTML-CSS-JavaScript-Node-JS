const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

conn.connect(function(error){
    if(error){
        console.log('Error en la conexión');
        throw error;
    }

    else{
        console.log('Conexión establecida correctamente');
    }
});

conn.end();