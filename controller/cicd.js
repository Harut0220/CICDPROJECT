const cicdService = require('../service/cicd.js');

const cicd = {
  get: async (req, res) => {
    const response = await cicdService.get();
    res.send(response);
  },
};

module.exports = cicd;
