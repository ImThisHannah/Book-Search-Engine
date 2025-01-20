import { User } from '../models/user'; // User model
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

// Helper function to generate a JWT token
const generateToken = (user: any) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
};

export const resolvers = {
  Query: {
    // `me` query to get the currently logged-in user.
    me: async (_: any, __: any, context: any) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }
      return await User.findById(context.user.userId);
    }
  },

  Mutation: {
    // `login` mutation to authenticate user and return JWT token
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = generateToken(user);
      return { token, user };
    },

    // `addUser` mutation to create a new user
    addUser: async (_: any, { username, email, password }: { username: string; email: string; password: string }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, email, password: hashedPassword });

      const token = generateToken(newUser);
      return { token, user: newUser };
    },

    // `saveBook` mutation to save a book to the user's list of saved books
    saveBook: async (_: any, { bookInput }: { bookInput: any }, context: any) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }

      const user = await User.findById(context.user.userId);
      if (!user) {
        throw new Error('User not found');
      }

      user.savedBooks.push(bookInput);
      await user.save();

      return user;
    },

    // `removeBook` mutation to remove a book from the user's saved books
    removeBook: async (_: any, { bookId }: { bookId: string }, context: any) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in');
      }

      const user = await User.findById(context.user.userId);
      if (!user) {
        throw new Error('User not found');
      }

      user.savedBooks = user.savedBooks.filter((book: any) => book.bookId !== bookId);
      await user.save();

      return user;
    }
  }
};
