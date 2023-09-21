const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Eliminar un registro de la tabla Matricula
conn.query('delete from Matricula' + 'where codigo = 1', function(error, tabla){
    if(error){
        console.log('Error al eliminar un registro de la tabla');
        throw error;
    }

    else{
        tabla.forEach(data => {
            console.log(data);
        });
    }
});

conn.end();