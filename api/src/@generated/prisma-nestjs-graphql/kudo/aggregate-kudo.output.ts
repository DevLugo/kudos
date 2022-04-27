import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { KudoCountAggregate } from './kudo-count-aggregate.output';
import { KudoMinAggregate } from './kudo-min-aggregate.output';
import { KudoMaxAggregate } from './kudo-max-aggregate.output';

@ObjectType()
export class AggregateKudo {

    @Field(() => KudoCountAggregate, {nullable:true})
    _count?: KudoCountAggregate;

    @Field(() => KudoMinAggregate, {nullable:true})
    _min?: KudoMinAggregate;

    @Field(() => KudoMaxAggregate, {nullable:true})
    _max?: KudoMaxAggregate;
}
