const express = require('express');
const { postNewUserResponse, retrieveAllUserResponses } = require('../controllers/userResponseController');
const User = require('../models/UserResponse');

const router = express.Router();

router.post('/new_user_Response', async (req, res) => {
  try {
    const responses = ["Please enter your first name", "Please enter your second name.", 'What is your date of birth?'];
    const dummyUserResponse = { questions: responses, number_of_questions: questions.length};
    const newUserResponse = await postNewUserResponse(dummyUserResponse);
    return res.status(200).send(newUserResponse);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const allUserResponses = await retrieveAllUserResponses();
    return res.status(200).send(allUserResponses);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
