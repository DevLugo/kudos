import { Req, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AsignedKudo } from 'src/@generated/prisma-nestjs-graphql/asigned-kudo/asigned-kudo.model';
import { KudoWhereInput } from 'src/@generated/prisma-nestjs-graphql/kudo/kudo-where.input';
import { Kudo } from 'src/@generated/prisma-nestjs-graphql/kudo/kudo.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { GqlAuthGuard } from '../auth/GqlAuthGuard';
import { CurrentUser } from '../auth/user.decorator';
import { KudoCreateInput } from './inputs/KudoCreateInput';
import { KudoService } from './kudo.service';

@UseGuards(GqlAuthGuard)
@Resolver(Kudo)
export class KudoResolver {
    constructor(private readonly _kudoService: KudoService){}

    @Query(() => [Kudo])
    async getReceivedKudos(
        @CurrentUser() user: User,
    ): Promise<Kudo[]> {
        return await this._kudoService.getReceivedKudos(user.id);
    }

    @Query(() => [AsignedKudo])
    async getAsignedKudos(
        @CurrentUser() user: User,
    ): Promise<AsignedKudo[]> {
        return await this._kudoService.getAsignedKudos(user.id);
    }

    @Mutation(() => Kudo)
    async createKudo(
        @CurrentUser() user: User,
        @Args({ name: 'input', type: () => KudoCreateInput})
        data: KudoCreateInput
    ){
        return await this._kudoService.sendKudo(
            data.id,
            data.message,
            user.id,
            data.User_to.connect.id
            );
    }
}
