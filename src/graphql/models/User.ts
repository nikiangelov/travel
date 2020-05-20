import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

export interface UserType extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: string;
}
const User =
  mongoose.models.User || mongoose.model<UserType>('User', UserSchema);
export default User;
