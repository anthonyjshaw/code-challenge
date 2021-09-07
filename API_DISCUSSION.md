# API Discussion

Below are some paragraphs discussing the part two exercise:

## Schema
There are two separate models that should be considered when building a form builder.

1. UserForm
2. UserResponses

### UserForm

  Here is a basic overview for the UserForm model:

````javascript
const  UserFormSchema = new Schema(
    {
        form_name: {
            type:  String,
            required:  true,
            minlength:  1,
        },
        questions: [{
            text: String,
            question_type: {
                type: String,
                enum: []
            }
        },]
        number_of_questions: {
            type:  Number,
            required:  true,
        },
        number_of_responses: {
            type:  Number,
            required:  true,
        }
    },
    {
        timestamps: {
            createdAt:  'created_at',
        },
    },
);
````
For the questions themselves, it makes sense to keep them as an array 
### UserResponses

Here is a basic overview for the UserResponses

## Feature set

Outside of the standard CRUD functionality, for any custom form application, there are three main points to consider.

1. Type of questions: is the question multiple choice, opinion based etc.
2. Character limit: how long should the answer be?
3. 

## Testing

When it comes to testing functionality, in order to avoid any malicious or misplaced characters, it's vital to include some form of validation. Therefore, one would likely write unit tests.
