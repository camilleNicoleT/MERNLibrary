import { gql } from '@apollo/client';

//replacing Post method for loginUser api
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//replacing the createUser post method api
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//replacing Save Book put api
export const SAVE_BOOK = gql`
  mutation savedBook($newBook: BookArgs! ) {
    savedBook(newBook: $newBook) {
      token
      user {
        savedBooks {
          _id
        title
        description
        }
        
      }
    }
  }
`;

//delete book 
export const DELETE_BOOK = gql`
  mutation deleteBook( $bookId: ID! ) {
    deleteBook(bookId: $bookId) {
      token
      user{
        savedBooks {
          _id
        }
      }
    }
  }
`;

// export const DELETE_BOOK = gql`

//   mutation deleteBook: (parent, {id}) => {
//    let ID = parseInt(id)
//    messages = messages.filter((message) => message.id !== ID);
//    return id;
// }
// }