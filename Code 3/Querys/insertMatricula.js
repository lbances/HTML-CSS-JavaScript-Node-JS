const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Inserción de datos en la tabla Matricula
conn.query('insert into Matricula' + '(codigo, fecha, alu_codigo, esp_codigo, costo)' + 'values (2, "21/12/2020", 6, 2, 20)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Matricula insertada correctamente');
    }
});

conn.query('insert into Matricula' + '(codigo, fecha, alu_codigo, esp_codigo, costo)' + 'values (3, "22/12/2020", 7, 2, 20)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Matricula insertada correctamente');
    }
});

conn.query('insert into Matricula' + '(codigo, fecha, alu_codigo, esp_codigo, costo)' + 'values (4, "23/12/2020", 8, 3, 20)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Matricula insertada correctamente');
    }
});

conn.query('insert into Matricula' + '(codigo, fecha, alu_codigo, esp_codigo, costo)' + 'values (6, "4/12/2020", 9, 3, 20)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Matricula insertada correctamente');
    }
});

conn.end();