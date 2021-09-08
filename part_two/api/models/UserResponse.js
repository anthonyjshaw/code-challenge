const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserResponseSchema = new Schema(
    {
      form_id: {
        type: String,
        required: true,
      },
      responses: {
        type:
        [String, Number, Boolean],
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
      },
    },
  );
  
  module.exports = mongoose.model('UserResponse', UserResponseSchema);
  