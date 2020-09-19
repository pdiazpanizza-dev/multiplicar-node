//Requireds
const fs = require('fs');
// const fs = require('express'); --> Este se instala. No es nativo de Node.
// const fs = require('./aaa'); --> son nuestros archivos, de nuestro proyecto

let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} x ${i} = ${base * i}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo de tabla-${base} ha sido creado`);
});