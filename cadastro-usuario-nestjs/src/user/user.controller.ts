import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './user.entity';
import { UserService } from './user.service';

@Controller('user/v1')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('cria')
    public cria(@Body() usuario) : Usuario{
        const userCriado = this.userService.cria(usuario)
        console.log(usuario)
        return userCriado
        
    }

    @Get()
    findAll(){
        return this.userService.findAll()
    }
        
}
