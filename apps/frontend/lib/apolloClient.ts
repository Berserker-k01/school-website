import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

const getStrapiURL = () => {
  // Si on est côté serveur (Node.js)
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_STRAPI_API_URL_INTERNAL || 'http://strapi:1337';
  }
  // Si on est côté client (Navigateur)
  return process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:13888';
};

const client = new ApolloClient({
  uri: `${getStrapiURL()}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
