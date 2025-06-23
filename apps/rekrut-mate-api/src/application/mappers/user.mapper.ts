import { GetUserDto } from '../dto/get-user.dto';
import { User } from '../../domain/entities/User';

export const toUserDto = (user: User): GetUserDto => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
