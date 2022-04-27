import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereInput } from './kudo-where.input';
import { KudoOrderByWithAggregationInput } from './kudo-order-by-with-aggregation.input';
import { KudoScalarFieldEnum } from './kudo-scalar-field.enum';
import { KudoScalarWhereWithAggregatesInput } from './kudo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { KudoCountAggregateInput } from './kudo-count-aggregate.input';
import { KudoMinAggregateInput } from './kudo-min-aggregate.input';
import { KudoMaxAggregateInput } from './kudo-max-aggregate.input';

@ArgsType()
export class KudoGroupByArgs {

    @Field(() => KudoWhereInput, {nullable:true})
    where?: KudoWhereInput;

    @Field(() => [KudoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KudoOrderByWithAggregationInput>;

    @Field(() => [KudoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof KudoScalarFieldEnum>;

    @Field(() => KudoScalarWhereWithAggregatesInput, {nullable:true})
    having?: KudoScalarWhereWithAggregatesInput;

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
