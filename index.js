const express = require('express');
const router = require('./router/cicd.js');

const app = express();

app.use('/ci', router);

console.log("hello world");
console.log("zdfgchjkljhgfcdgchjbknljhgfdcvhjkl");
console.log("zdfgchjkljhgfcdgchjbknljhgfdcvhjkl");
console.log("zdfgchjkljhgfcdgchjbknljhgfdcvhjkl");



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
