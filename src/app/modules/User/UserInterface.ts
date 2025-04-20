import { Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  imgURL?: string;
}

export interface UserModel extends Model<IUser> {
  userExistsByEmail(email: string): Promise<IUser>;
  passwordMatch(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
