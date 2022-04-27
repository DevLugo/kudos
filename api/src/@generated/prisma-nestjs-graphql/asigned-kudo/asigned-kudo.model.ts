import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';
import { User } from '../user/user.model';

@ObjectType()
export class AsignedKudo {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;

    @Field(() => User, {nullable:false})
    userFromR?: User;

    @Field(() => User, {nullable:false})
    userToR?: User;
}
