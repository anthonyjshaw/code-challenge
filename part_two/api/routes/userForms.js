const express = require('express');
const { postNewUserForm, retrieveAllUserForms } = require('../controllers/userFormController');
const User = require('../models/UserForm');

const router = express.Router();

router.post('/new_user_form', async (req, res) => {
  try {
    const questions = ["Please enter your first name", "Please enter your second name.", 'What is your date of birth?'];
    const dummyUserForm = { questions: questions, number_of_questions: questions.length };
    const newUserForm = await postNewUserForm(dummyUserForm);
    return res.status(200).send(newUserForm);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const allUserForms = await retrieveAllUserForms();
    return res.status(200).send(allUserForms);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
