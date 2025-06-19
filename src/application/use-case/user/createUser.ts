import { CreateUserDto } from '../../dto/create-user.dto';
import { userRepository } from '../../../infrastructure/database/repositories/user.repository';
import { hashText } from '../../services/hashService';
import { toUserDto } from '../../mappers/user.mapper';
import { getByEmail } from './getUser';

export const createUserUseCase = async (user: CreateUserDto) => {
  const userExists = getByEmail(user.email);
  if ( userExists ) {
    throw new Error('User already exists');
  }
  const hashedPassword = await hashText(user.password);
  const newUser = await userRepository.create({ ...user, password: hashedPassword });
  return toUserDto(newUser);
};

