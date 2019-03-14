// requireds
// const fs = require ('express');
// const fs = require('./fs');

//const multiplicar = require('./multiplicar/multiplicar'); 




// let base = '8';
// let data ='';

// for (let i = 1;  i <= 10; i++) {
    
//     data += (`${base} * ${i} = ${base * i}\n`);
// }

// const data = new Uint8Array(Buffer.from('Hello Node.js'));

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`El archivo tabla-${ base } ha sido creado`)
// });
const argv = require('./config/yargs.js').argv

const {crearArchivo, listartabla} = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
  case 'listar':
      listartabla(argv.base,argv.limite);
    break;
  case 'crear':
    listartabla(argv.base,argv.limite);
    crearArchivo(argv.base,argv.limite)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
    break;
}


// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(argv.base)
//   .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//   .catch(err => console.log(err));

// console.log('Limite',argv.limite);
// console.log(argv2.process);
