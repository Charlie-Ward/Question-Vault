export default {
    name: 'geography',
    type: 'document',
    title: 'Geogrpahy',
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