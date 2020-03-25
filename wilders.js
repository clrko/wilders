const chalk = require('chalk');
const log = console.log;

let emily = 'Emily';
let walid = 'Walid';
let aurelien = 'Aurélien';
let mamed = 'Mamed';

log(chalk.blue(emily), chalk.green.bgGrey(walid), chalk.yellow.underline.bold(aurelien), chalk.rgb(123, 45, 67)(mamed));