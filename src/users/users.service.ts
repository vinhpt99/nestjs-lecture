import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CraeteUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Pham Trong Vinh",
      "email": "ptvinh1@cmcglobal.vn",
      "role": "INTERN"
    },
    {
      "id": 2,
      "name": "Pham Trong Vinh",
      "email": "ptvinh1@cmcglobal.vn",
      "role": "INTERN"
    },
    {
      "id": 3,
      "name": "Pham Trong Vinh",
      "email": "ptvinh1@cmcglobal.vn",
      "role": "INTERN"
    },
    {
      "id": 4,
      "name": "Pham Trong Vinh",
      "email": "ptvinh1@cmcglobal.vn",
      "role": "INTERN"
    }
  ]
  
  finAll(role?: 'INTERN'|'ENGINEER'|'ADMIN') {
     if(role) {
         const rolesArray = this.users.filter(user => user.role === role)
         if(!rolesArray.length) throw new NotFoundException('User Role Not Found')
         return rolesArray
     }
     return this.users
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id)

    if(!user) throw new NotFoundException('User Not Foud')
    return user
  }
  
  create(craeteUserDto: CraeteUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...craeteUserDto
    }
    this.users.push(newUser)
    return newUser
  }
  
  update(id: number, updateUserDto: UpdateUserDto) {
     this.users = this.users.map(user => {
      if(user.id === id) {
         return {...user, ...updateUserDto}
      }
      return user
     })
     return this.findOne(id)
  }

  delete(id: number) {
     const removeUser = this.findOne(id)
     this.users = this.users.filter(user => user.id !== id)
     return removeUser
  }
}
