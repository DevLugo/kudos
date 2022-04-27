import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';
import { AsignedKudoOrderByWithAggregationInput } from './asigned-kudo-order-by-with-aggregation.input';
import { AsignedKudoScalarFieldEnum } from './asigned-kudo-scalar-field.enum';
import { AsignedKudoScalarWhereWithAggregatesInput } from './asigned-kudo-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AsignedKudoCountAggregateInput } from './asigned-kudo-count-aggregate.input';
import { AsignedKudoMinAggregateInput } from './asigned-kudo-min-aggregate.input';
import { AsignedKudoMaxAggregateInput } from './asigned-kudo-max-aggregate.input';

@ArgsType()
export class AsignedKudoGroupByArgs {

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    where?: AsignedKudoWhereInput;

    @Field(() => [AsignedKudoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AsignedKudoOrderByWithAggregationInput>;

    @Field(() => [AsignedKudoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AsignedKudoScalarFieldEnum>;

    @Field(() => AsignedKudoScalarWhereWithAggregatesInput, {nullable:true})
    having?: AsignedKudoScalarWhereWithAggregatesInput;

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
