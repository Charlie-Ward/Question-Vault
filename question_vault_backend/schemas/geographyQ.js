export default {
    name: 'geographyquestion',
    type: 'document',
    title: 'Geography Questions',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'options',
            title: 'Options',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'string',
        },
    ]
  }