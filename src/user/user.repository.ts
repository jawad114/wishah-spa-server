import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // Your user entity

@Injectable()
export class UserRepository extends Repository<User> {
 

// async findOneByEmail(email: string): Promise<User | undefined> {
//         return this.findOne({ where: { email } }); // `findOne` should be available here
//     }

  async createUser(email: string, hashedPassword: string) {
    // const user = this.repository.create({ email, password: hashedPassword });
    // return this.repository.save(user);
 
return {email}
 }
}
