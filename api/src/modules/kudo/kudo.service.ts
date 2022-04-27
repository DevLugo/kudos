import { Injectable } from '@nestjs/common';
import { AsignedKudo, Kudo } from '@prisma/client';
import { KudoCreateInput } from 'src/@generated/prisma-nestjs-graphql/kudo/kudo-create.input';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class KudoService {
    constructor(private readonly _db: PrismaService){}

    
    async getReceivedKudos(userId:string): Promise<Kudo[]>{
        return this._db.kudo.findMany({
            where:{
                to:{
                    equals:userId
                }
            }
        });
    }

    async getAsignedKudos(userId:string): Promise<AsignedKudo[]>{
        return this._db.asignedKudo.findMany({
            where:{
                userFromR:{
                    id:{
                        equals: userId
                    }
                }
            }
        });
    }
    
    async sendKudo(data:KudoCreateInput){
        return this._db.kudo.create({
            data
        });
    }

}
