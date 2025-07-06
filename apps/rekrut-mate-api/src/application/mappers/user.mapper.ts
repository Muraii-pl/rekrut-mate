import { User } from '../../domain/entities';
import { GetUserDto } from '@rm/dtos';

export const toUserDto = (user: User): GetUserDto => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
