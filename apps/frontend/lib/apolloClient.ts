import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://strapi.elektronplus.pl'}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
