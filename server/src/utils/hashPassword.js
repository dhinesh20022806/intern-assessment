const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.createHashPassword = async (planTextPassword) => {
  try {
    const hashPassword = await bcrypt.hash(planTextPassword, saltRounds);
    return hashPassword;
  } catch (error) {
    console.log("hashing error", error.message);
  }
};

exports.camparePassword = async (planTextPassword, hashPassword) => {
  try {
    const result = await bcrypt.compare(planTextPassword, hashPassword);
    return result;
  } catch (error) {
    console.log("camparing error", error.message);
  }
};
