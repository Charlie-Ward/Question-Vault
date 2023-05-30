// schema.js

export default {
    name: 'geographyflashcard',
    type: 'document',
    title: 'Geography Flashcards',
    fields: [
      {
        name: 'question',
        type: 'string',
        title: 'Question',
      },
      {
        name: 'answer',
        type: 'text',
        title: 'Answer',
      },
    ],
  };
  