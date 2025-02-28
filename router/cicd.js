const { Router } = require('express');
const cicd = require('../controller/cicd.js');

const router = Router();

router.get('/cd', cicd.get);

module.exports = router;
