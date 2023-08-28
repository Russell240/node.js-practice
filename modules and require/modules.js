const {people, ages} = require('./people');

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir(), os.cpus(), os.hostname(), os.machine());