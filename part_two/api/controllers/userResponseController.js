const UserResponse = require('../models/UserResponse');

const postNewUserResponse = async (userResponse) => {
  try {
    const newUserResponse = new UserResponse({ ...userResponse });
    const dbEntry = await newUserResponse.save();
    return dbEntry;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveAllUserResponses = async () => {
  try {
    const allUserResponses = await UserResponse.find({});
    return allUserResponses;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { postNewUserResponse, retrieveAllUserResponses };
