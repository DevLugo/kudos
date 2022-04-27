import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AsignedKudoCountAggregate } from './asigned-kudo-count-aggregate.output';
import { AsignedKudoMinAggregate } from './asigned-kudo-min-aggregate.output';
import { AsignedKudoMaxAggregate } from './asigned-kudo-max-aggregate.output';

@ObjectType()
export class AggregateAsignedKudo {

    @Field(() => AsignedKudoCountAggregate, {nullable:true})
    _count?: AsignedKudoCountAggregate;

    @Field(() => AsignedKudoMinAggregate, {nullable:true})
    _min?: AsignedKudoMinAggregate;

    @Field(() => AsignedKudoMaxAggregate, {nullable:true})
    _max?: AsignedKudoMaxAggregate;
}
