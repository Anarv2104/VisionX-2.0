const axios = require("axios");
const userTokens = require("../routes/github").userTokens; // Import token store

const githubAPI = async (username) => {
  const token = userTokens[username];
  if (!token) throw new Error("No GitHub token found for user");

  return axios.create({
    baseURL: "https://api.github.com",
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
    },
  });
};

module.exports = githubAPI;