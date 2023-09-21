const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Actualización de registros en la tabla Matricula
conn.query('update Matricula set costo = "20"' + 'where costo = "500"', function(error, tabla){
    if(error){
        console.log('Error en la actualización de datos');
        throw error;
    }

    else{
        tabla.forEach(data => {
            console.log(data);
        });
    }
});

conn.end();