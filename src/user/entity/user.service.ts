import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Faizan', email: 'faizan@gmail.com', password: '1234' },
  ];
  private idCounter = 2;

  create(createUserDto: LoginDto): string {
    for (const user of this.users) {
      if (user.email === createUserDto.email) {
        return 'User already exists with this email';
      }
    }
    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
    };
    this.users.push(newUser);
    return 'User is created successfully';
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    const user = this.users.find(u => u.id === +id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  update(id: string, updateUserDto: LoginDto): string {
    const user = this.users.find(u => u.id === +id);
    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, updateUserDto);
    return 'User updated successfully';
  }

  remove(id: string): string {
    const index = this.users.findIndex(u => u.id === +id);
    if (index === -1) throw new NotFoundException('User not found');
    this.users.splice(index, 1);
    return 'User deleted successfully';
  }
}    