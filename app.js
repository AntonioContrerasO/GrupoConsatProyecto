const express = require('express');// En esta sección se declaran las librerias
const app = express(); // Se crea nuestra aplicacción web

app.use(express.static("public")); // Referencia a que se utilizará en la pagina

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Noticias.html'); // Cuando alguien se conecte se le envia la pagina
});


app.listen(5001, () => {// Esta linea inicializa el server
  console.log('listening on *:5001');
});
