const express = require('express');
const app = express();

var port = process.env.PORT || 2000;

app.get('/', (req,res) => res.send('Hello !'));

app.listen(port , () => console.log(`Server Running on Port: `+ port));