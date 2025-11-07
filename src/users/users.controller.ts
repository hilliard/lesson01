import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { LargeNumberLike } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';      



@Controller('users')
export class UsersController {
   constructor(private readonly usersService: UsersService) {}

   @Get() // GET /users /users?role=admin
   findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'  ) {
    return this.usersService.findAll(role)
   }

   @Get('interns') // GET /users/interns
   findAllInterns()  {
    return [] //'This action returns interns';
   }

   @Get(':id') // GET /users/:id
   findOne(@Param('id', ParseIntPipe) id: number  ) {
    return this.usersService.findOne(id) //'This action returns a user';
   }

   @Post() // POST /users
   create(@Body(ValidationPipe) createUserDto: CreateUserDto  ) {
    return this.usersService.create(createUserDto) //'This action returns a user'; 
   }

   @Patch(':id') // PATCH /users/:id
   update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto  ) {
    return this.usersService.update(id, updateUserDto) //'This action returns a user';
   }

   @Delete(':id') // Delete /users/:id
   delete(@Param('id', ParseIntPipe) id: number ) {
    return this.usersService.delete(id) //'This action deletes a user';
   }

}
