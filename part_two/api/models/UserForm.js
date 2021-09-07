const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserFormSchema = new Schema(
    {
      form_name: {
        type: String,
        required: true,
        minlength: 1,
      },
      questions: {
        type: Array,
        required: true,
        maxlength: 20,
      },
      number_of_questions: {
        type: Number,
        required: true,
      },
      number_of_responses: {
          type: Number,
          required: true,
      }
    },
    {
      timestamps: {
        createdAt: 'created_at',
      },
    },
  );
  
  module.exports = mongoose.model('UserForm', UserFormSchema);
  