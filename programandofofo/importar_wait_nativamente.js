import {setTimeout as wait} from 'node:timers/Promise'
// ou
const wait = require('node:timers/promise').setTimeout

const teste = async () => {
    await wait(2000);
    console.log("Esperou 2 segundos");
};

teste();