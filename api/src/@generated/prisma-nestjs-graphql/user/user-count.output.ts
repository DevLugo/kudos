import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    KudosFrom?: number;

    @Field(() => Int, {nullable:false})
    KudosTo?: number;

    @Field(() => Int, {nullable:false})
    AsignedKudosFrom?: number;

    @Field(() => Int, {nullable:false})
    AsignedKudosTo?: number;
}
