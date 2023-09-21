const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'localhost',
    database:'gestionDeMatricula',
    user:'root',
    password:'lbances',
});

// Inserción de datos en la tabla Especialidad
conn.query('insert into Especialidad' + '(esp_codigo, esp_nombre, esp_duracion)' + 'values(2, "Ingeniero Civil", 3)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Especialidad insertado correctamente');
    }
});

conn.query('insert into Especialidad' + '(esp_codigo, esp_nombre, esp_duracion)' + 'values(3, "Ingeniero Mecánico", 3)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Especialidad insertado correctamente');
    }
});

conn.query('insert into Especialidad' + '(esp_codigo, esp_nombre, esp_duracion)' + 'values(4, "Ingeniero Eléctrico", 3)', function(error){
    if(error){
        console.log('Error al insertar datos');
        throw error;
    }

    else{
        console.log('Especialidad insertado correctamente');
    }
});

conn.end();