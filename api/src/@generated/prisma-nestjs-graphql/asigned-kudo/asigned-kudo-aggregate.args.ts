import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';
import { AsignedKudoOrderByWithRelationInput } from './asigned-kudo-order-by-with-relation.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AsignedKudoCountAggregateInput } from './asigned-kudo-count-aggregate.input';
import { AsignedKudoMinAggregateInput } from './asigned-kudo-min-aggregate.input';
import { AsignedKudoMaxAggregateInput } from './asigned-kudo-max-aggregate.input';

@ArgsType()
export class AsignedKudoAggregateArgs {

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    where?: AsignedKudoWhereInput;

    @Field(() => [AsignedKudoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AsignedKudoOrderByWithRelationInput>;

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:true})
    cursor?: AsignedKudoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AsignedKudoCountAggregateInput, {nullable:true})
    _count?: AsignedKudoCountAggregateInput;

    @Field(() => AsignedKudoMinAggregateInput, {nullable:true})
    _min?: AsignedKudoMinAggregateInput;

    @Field(() => AsignedKudoMaxAggregateInput, {nullable:true})
    _max?: AsignedKudoMaxAggregateInput;
}
