const UserForm = require('../models/UserForm');

const postNewUserForm = async (userForm) => {
  try {
    const newUserForm = new UserForm({ ...userForm });
    const dbEntry = await newUserForm.save();
    return dbEntry;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveAllUserForms = async () => {
  try {
    const allUserForms = await UserForm.find({});
    return allUserForms;
  } catch (err) {
    throw new Error(err);
  }
};

const retrieveUserForm = async (id) => {
  try {
    const userResponse = await UserForm.findById(id);
    return userResponse;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = { postNewUserForm, retrieveAllUserForms, retrieveUserForm };
