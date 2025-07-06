export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface GetUserDto {
  id: string;
  name: string;
  email: string;
}
