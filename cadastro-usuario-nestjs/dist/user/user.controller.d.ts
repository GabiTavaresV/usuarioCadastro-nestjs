import { Usuario } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    cria(usuario: any): Usuario;
    findAll(): string;
}
