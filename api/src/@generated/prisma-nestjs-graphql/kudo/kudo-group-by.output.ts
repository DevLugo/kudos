import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KudoCountAggregate } from './kudo-count-aggregate.output';
import { KudoMinAggregate } from './kudo-min-aggregate.output';
import { KudoMaxAggregate } from './kudo-max-aggregate.output';

@ObjectType()
export class KudoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;

    @Field(() => KudoCountAggregate, {nullable:true})
    _count?: KudoCountAggregate;

    @Field(() => KudoMinAggregate, {nullable:true})
    _min?: KudoMinAggregate;

    @Field(() => KudoMaxAggregate, {nullable:true})
    _max?: KudoMaxAggregate;
}
