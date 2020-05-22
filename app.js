const express = require('express'),
    app = express(),
    path = require('path');

// Ruta de elementos public

app.use(express.static(path.join(__dirname, "/public")));

//Rutas de interacción de la página

app.get('/', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/index.html`)
})

app.get('/Conoceme', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/infoUno.html`)
})

app.get('/Experiencia', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/xp.html`)
})

app.get('/Educacion', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/educacion.html`)
})

app.get('/Idiomas', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/idiomas.html`)
})

app.get('/Aptitudes', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/aptitudes.html`)
})

app.get('/Contacto', (peticion, respuesta) => {
    respuesta.sendFile(`${__dirname}/views/contacto.html`)
})



app.listen(8080);
console.log("Funciona prro");