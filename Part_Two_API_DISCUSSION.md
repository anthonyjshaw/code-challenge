# Part Two API Discussion

Below are some paragraphs discussing the part two exercise:

## Schema
There are two separate models that should be considered when building a form builder.

1. UserForm - the form that users will be able to create
2. UserResponse - the responses that users will give to the questions

### UserForm

  Here is a basic overview for the UserForm model:

````javascript
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
````
For the questions themselves, it makes sense to keep them as an array of objects, due to it being more accessible and easier to store in a database, rather than having a separate model for each question. For functionality purposes, it's important to have the question types as enums, to prevent any unwanted categories, thus making it slightly more scalable. 

### UserResponses

Here is a basic overview for the UserResponses:
````javascript

const UserResponseSchema = new Schema(
    {
      form_id: {
        type: String,
        required: true,
      },
      responses: {
        type: [String, Number, Boolean],
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: 'created_at',
      },
    },
  );
````

For responses, it's necessary to have a one to many relationship linking responses to a single form. For that purpose, a form_id has been placed in the schema. The response type has also been limited to a string, number or bool only. 


## Feature set

While the feature set here only allows for the designer of the form to pose questions, one could imagine including additional features such as showcasing the number of responses or limiting the number of participants based on a secure key, similar to Survey Monkey or Google Forms.
In addition, one could limit the number of questions per form to reduce data storage.

## Testing

When it comes to testing functionality, in order to avoid any malicious or misplaced characters, it's vital to include some form of validation testing. Therefore, one would likely write a series of unit tests for both the user forms and the user responses. These would be designed to test the presence of both question and response, whilst also considering character length and data type.

In addition, it's also important to do some form of system testing, where one would go through the form making procedure, ensuring that both form and related responses successfully saves to the database.  

