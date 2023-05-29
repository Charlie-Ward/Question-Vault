import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'nvbqo7z9',
  dataset: 'production',
  useCdn: true,
});

export default client;
