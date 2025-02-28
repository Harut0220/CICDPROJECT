import cicdService from "../service/cicd.js";

const cicd = {
  get: async (req, res) => {
    const response = await cicdService.get();
    res.send(response);
  },
};

export default cicd;
