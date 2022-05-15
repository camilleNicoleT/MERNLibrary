import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
      _id
      email
      username
      savedBooks{
        authors
        description
        image
        link 
        title
      }
  }
`;
