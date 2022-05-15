const { User } = require('../models');
const { AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  //User get's their information
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {

      const userData = await User.findOne({_id: context.user._id})
        .select('-__v -password')
  
      return userData;
      }
    throw new AuthenticationError('Not logged in');
   
  },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return {token, user};
  
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return {token, user};
      },
      addBook: async (parent, {newBook}, context) => {
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: newBook } },
            { new: true }
          );
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
     
      },
      deleteBook: async (parent, { bookId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: bookId } },
            { new: true }
          )
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      }
  }
};
// // make a search to google books api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };
module.exports = resolvers;

  