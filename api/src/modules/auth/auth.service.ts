import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserCreateInput } from '../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from '../../core/prisma/prisma.service';
import { genSalt, hash, compare } from 'bcryptjs';
import { SignInInput } from './signIn.input';
import { IJwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly _db: PrismaService,
        private readonly _jwtService: JwtService,

    ){}

    async signup(data: UserCreateInput): Promise<User> {
        const { email, password } = data;
        const aaa = await this._db.user.findFirst({
            where:{email:email}
        });
    
        if (aaa) {
          throw new ConflictException('Email already exists');
        }

        const salt = await genSalt(10);
        const passwordHashed = await hash(password, salt);

        const newUser = await this._db.user.create({
            data:{ 
                email:data.email,
                lastName:data.lastName,
                firstName:data.firstName,
                password: passwordHashed
            }
        });
        return newUser;
      }

      async signin(signinDto: SignInInput): Promise<{ token: string, user: User }> {
        const { email, password } = signinDto;
    
        const user: User = await this._db.user.findUnique({
          where: { email },
          include: {
            organization: true
          }
        });
    
        if (!user) {
          throw new NotFoundException('User does not exist');
        }
    
        const isMatch = await compare(password, user.password);
    
        if (!isMatch) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const payload: IJwtPayload = {
          id: user.id,
          email: user.email,
          organization: user.organization
        };
    
        const token = await this._jwtService.sign(payload);
        
        return { 
          token, 
          user
        };
    }
}
