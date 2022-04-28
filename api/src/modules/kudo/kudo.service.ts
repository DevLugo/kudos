import { Injectable } from '@nestjs/common';
import { AsignedKudo, Kudo } from '@prisma/client';
import { KudoCreateInput } from 'src/@generated/prisma-nestjs-graphql/kudo/kudo-create.input';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class KudoService {
    constructor(private readonly _db: PrismaService){}

    async getReceivedKudos(userId:string): Promise<Kudo[]>{
        console.log(userId)
        return this._db.kudo.findMany({
            where:{
                to:{
                    equals:userId
                }
            },
            include:{
                User_from:true,
                User_to:true,
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
            },
            include: {
                userFromR: true,
                userToR: true
            }
        });
    }
    
    async sendKudo(asignedKudoId: string, message:string, from:string, to:string){
        console.log(from,to)
        await this._db.asignedKudo.update({
            where: {
                id: asignedKudoId
            },
            data: {
                status: "SENT"
            }
        });
        return await this._db.kudo.create({
            data: {
                message,
                User_from: {
                    connect:{
                        id:from
                    }
                },
                User_to: {
                    connect:{
                        id:to
                    }                    
                }
            },
            include:{
                User_from: true,
                User_to: true
            }
        });
    }

}
