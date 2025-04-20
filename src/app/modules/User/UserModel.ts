import { model, Schema } from 'mongoose';
import { IUser, UserModel } from './UserInterface';

const userSchema = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgURL: { type: String, required: false },
  },

  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  },
);

userSchema.statics.userExistsByEmail = async function (email: string) {
  return await User.findOne({ email: email });
};

export const User = model<IUser, UserModel>('User', userSchema);
