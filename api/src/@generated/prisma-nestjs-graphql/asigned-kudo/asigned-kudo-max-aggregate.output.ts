import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';

@ObjectType()
export class AsignedKudoMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:true})
    status?: keyof typeof AsignedKudosStatus;

    @Field(() => String, {nullable:true})
    from?: string;

    @Field(() => String, {nullable:true})
    to?: string;
}
