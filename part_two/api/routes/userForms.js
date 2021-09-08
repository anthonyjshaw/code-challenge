const express = require('express');
const { postNewUserForm, retrieveAllUserForms, retrieveUserForm} = require('../controllers/userFormController');
const User = require('../models/UserForm');

const router = express.Router();

router.post('/new_user_form', async (req, res) => {
  try {
    const questions = [
      {text: "Please enter your first name", question_type: "Multiple Choice"}, 
      {text: "Please enter your second name.", question_type: "Text"}, 
      {text: 'What is your date of birth?', question_type: "Text"}, 
      {text: 'Do you like Coca-Cola?', question_type: "True or False"}
    ];
    const dummyUserForm = {form_name: "Dummy Form", questions: questions, number_of_questions: questions.length };
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

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const userForm = retrieveUserForm(req.params.id);
  } catch (err) {
    return res.status(500).send({error: err.message});
  }
});

module.exports = router;
