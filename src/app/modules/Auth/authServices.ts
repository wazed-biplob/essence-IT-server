import config from '../../config/config';
import { IUser } from '../User/UserInterface';
import { User } from '../User/UserModel';
import bcrypt from 'bcrypt';

const createUser = async (userData: IUser) => {
  const plainPassword = userData.password;
  const hashedpassword = await bcrypt.hash(
    plainPassword,
    Number(config.salt_rounds),
  );

  userData.password = hashedpassword;
  const user = await User.userExistsByEmail(userData.email);
  if (user) {
    throw new Error('This email has already been registered.');
  }
  const result = await User.create(userData);

  return result;
};
export const authServices = {
  createUser,
};
