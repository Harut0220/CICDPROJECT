const express = require('express');
const router = require('./router/cicd.js');

const app = express();

app.use('/ci', router);

console.log("hello world");


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
