const express = require('express');
const router = require('./router/cicd.js');

const app = express();

app.use('/ci', router);

console.log('Server is starting...=====================');
console.log('Server is starting...=====================');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
