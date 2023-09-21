const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Consulta todas la Especialidades
conn.query('select codigo, fecha, alu_apellidos, alu_nombres, esp_nombre' + 'from Matricula inner join Alumno, Especialidad' + 'on Alumno.alu_codigo = Matricula.alu_codigo inner join Especialidad' + 'on Especialidad.esp_codigo = Matricula.esp_codigo', function(error, tabla){
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