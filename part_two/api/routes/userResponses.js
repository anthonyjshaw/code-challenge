const express = require('express');
const { postNewUserResponse, retrieveAllUserResponses, retrieveUserResponse } = require('../controllers/userResponseController');
const User = require('../models/UserResponse');

const router = express.Router();

router.post('/new_user_response', async (req, res) => {
  try {
    // Response to previous form.
    const responses = ["David", "Watts.", '28/04/1968', true];
    const dummyUserResponse = {form_id: '6138d7aa51dd2580ffe31dac', responses: responses};
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

router.get('/:id', async (req, res) => {
  try {
    const userResponse = retrieveUserResponse(req.params.id);
  } catch (err) {
    return res.status(500).send({error: err.message});
  }
});

module.exports = router;
