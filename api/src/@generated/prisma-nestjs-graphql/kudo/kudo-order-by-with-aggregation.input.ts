import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { KudoCountOrderByAggregateInput } from './kudo-count-order-by-aggregate.input';
import { KudoMaxOrderByAggregateInput } from './kudo-max-order-by-aggregate.input';
import { KudoMinOrderByAggregateInput } from './kudo-min-order-by-aggregate.input';

@InputType()
export class KudoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    message?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => KudoCountOrderByAggregateInput, {nullable:true})
    _count?: KudoCountOrderByAggregateInput;

    @Field(() => KudoMaxOrderByAggregateInput, {nullable:true})
    _max?: KudoMaxOrderByAggregateInput;

    @Field(() => KudoMinOrderByAggregateInput, {nullable:true})
    _min?: KudoMinOrderByAggregateInput;
}
