import { yarg } from './config/plugins/args.plugin';

const fs = require('fs');
const { b: base, l: limit, s: showTable } = yarg;
console.log(yarg);
let outputMessage: string = '';
let header: string = `Tabla del ${base}\n`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} * ${i} = ${base * i}\n`;
}
showTable && console.log(header + outputMessage);

fs.writeFileSync(`tabla-${base}.txt`, `${header}\n${outputMessage}`, 'utf8');
