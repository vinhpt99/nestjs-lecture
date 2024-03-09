import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { query } from 'express';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CraeteUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {

  }
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.finAll(role)
  }

  @Get(':id') 
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  @Get('intern')
  findAllIntern() {
    return []
  }
  
  @Post()
  create(@Body(ValidationPipe) craeteUserDto: CraeteUserDto) {
      return this.userService.create(craeteUserDto )
  }

  @Patch(':id') 
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:  UpdateUserDto) {
     return this.userService.update(id, updateUserDto)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
     return this.userService.delete(id);
  }
}
