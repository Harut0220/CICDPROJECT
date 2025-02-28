import express from 'express';
import router from './router/cicd.js';

const app = express();





app.use('/ci', router);

console.log('Server is starting...=====================');


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});