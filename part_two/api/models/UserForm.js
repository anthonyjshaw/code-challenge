const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserFormSchema = new Schema(
    {
      form_name: {
        type: String,
        required: true,
        maxlength: 100,
      },
      questions: [{
        text: String,
        question_type: {
          type: String,
          enum: ["Multiple Choice", "True or False", "Text"],
          required: true,
        }
      }],
      number_of_questions: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
      },
    },
  );
  
  module.exports = mongoose.model('UserForm', UserFormSchema);
  