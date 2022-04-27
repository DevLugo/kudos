import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereInput } from './kudo-where.input';
import { KudoOrderByWithRelationInput } from './kudo-order-by-with-relation.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KudoCountAggregateInput } from './kudo-count-aggregate.input';
import { KudoMinAggregateInput } from './kudo-min-aggregate.input';
import { KudoMaxAggregateInput } from './kudo-max-aggregate.input';

@ArgsType()
export class KudoAggregateArgs {

    @Field(() => KudoWhereInput, {nullable:true})
    where?: KudoWhereInput;

    @Field(() => [KudoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KudoOrderByWithRelationInput>;

    @Field(() => KudoWhereUniqueInput, {nullable:true})
    cursor?: KudoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => KudoCountAggregateInput, {nullable:true})
    _count?: KudoCountAggregateInput;

    @Field(() => KudoMinAggregateInput, {nullable:true})
    _min?: KudoMinAggregateInput;

    @Field(() => KudoMaxAggregateInput, {nullable:true})
    _max?: KudoMaxAggregateInput;
}
