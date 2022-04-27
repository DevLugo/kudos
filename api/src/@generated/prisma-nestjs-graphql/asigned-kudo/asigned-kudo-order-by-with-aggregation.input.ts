import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AsignedKudoCountOrderByAggregateInput } from './asigned-kudo-count-order-by-aggregate.input';
import { AsignedKudoMaxOrderByAggregateInput } from './asigned-kudo-max-order-by-aggregate.input';
import { AsignedKudoMinOrderByAggregateInput } from './asigned-kudo-min-order-by-aggregate.input';

@InputType()
export class AsignedKudoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => AsignedKudoCountOrderByAggregateInput, {nullable:true})
    _count?: AsignedKudoCountOrderByAggregateInput;

    @Field(() => AsignedKudoMaxOrderByAggregateInput, {nullable:true})
    _max?: AsignedKudoMaxOrderByAggregateInput;

    @Field(() => AsignedKudoMinOrderByAggregateInput, {nullable:true})
    _min?: AsignedKudoMinOrderByAggregateInput;
}
