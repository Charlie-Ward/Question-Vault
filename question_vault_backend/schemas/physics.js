export default {
    name: 'physics',
    type: 'document',
    title: 'Physics',
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