const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Consulta todas la Especialidades
conn.query('select * from Especialidad', function(error, tabla){
    if(error){
        console.log('Error en la consulta');
        throw error;
    }

    else{
        tabla.forEach(data => {
            console.log(data);
        });
    }
});

conn.end();