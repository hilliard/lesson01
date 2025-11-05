import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
   findOne(@Param('id') id: string  ) {
    return this.usersService.findOne(+id) //'This action returns a user';
   }

   @Post() // POST /users
   create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}  ) {
    return this.usersService.create(user) //'This action returns a user'; 
   }

   @Patch(':id') // PATCH /users/:id
   update(@Param('id') id: string, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}  ) {
    return this.usersService.update(+id, userUpdate) //'This action returns a user';
   }

   @Delete(':id') // Delete /users/:id
   delete(@Param('id') id: string  ) {
    return this.usersService.delete(+id) //'This action deletes a user';
   }

}
