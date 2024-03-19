const web3_101_checkandget = require('web3-101-checkandget');
const web3_101_checkandget_implement = require('web3-101-checkandget-implement');
const underscore = require('underscore');
const webpack_cli = require('webpack-cli');
const bcrypt = require('bcrypt');
const fs_extra = require('fs-extra');
const supertest = require('supertest');

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
setTimeoutPromise(2000, 'done').then(value => {
  console.log(value);
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.exit();