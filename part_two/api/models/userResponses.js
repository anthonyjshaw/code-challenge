const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserResponseSchema = new Schema(
    {
      form_id: {
        type: Number,
        required: true,
      },
      number_of_questions: {
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
  
  module.exports = mongoose.model('UserResponse', UserResponseSchema);
  