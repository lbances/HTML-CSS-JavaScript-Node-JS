const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Inserción de datos en la tabla Alumno
conn.query('insert into Alumno' + '(alu_codigo, alu_apellidos, alu_nombres, alu_sexo)' + 'values (6, "Buenaño", "Luis", "M")', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Alumno insertado correctamente');
    }
});

conn.query('insert into Alumno' + '(alu_codigo, alu_apellidos, alu_nombres, alu_sexo)' + 'values (7, "Huacachi", "Elizabeth", "F")', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Alumno insertado correctamente');
    }
});

conn.query('insert into Alumno' + '(alu_codigo, alu_apellidos, alu_nombres, alu_sexo)' + 'values (8, "Urbano", "Pablo", "M")', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Alumno insertado correctamente');
    }
});

conn.query('insert into Alumno' + '(alu_codigo, alu_apellidos, alu_nombres, alu_sexo)' + 'values (9, "Rodriguez", "Rosalba", "F")', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Alumno insertado correctamente');
    }
});

conn.end();