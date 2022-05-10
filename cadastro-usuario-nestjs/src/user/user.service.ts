import { Injectable } from '@nestjs/common';
import { Usuario } from './user.entity';

@Injectable()
export class UserService {

    private usuarios : Array<Usuario> = []

    public cria ( usuario: Usuario) : Usuario{
        this.usuarios.push(usuario)

        return usuario;
    }

    findAll(){
        return 'This action return all users'
    }
}
