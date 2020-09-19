const yargs = require("yargs");

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


const { crearArchivo } = require('./multiplicar/multiplicar');


let argv2 = process.argv;

console.log('Base: ', argv.base);
console.log('Límite: ', argv.limite);