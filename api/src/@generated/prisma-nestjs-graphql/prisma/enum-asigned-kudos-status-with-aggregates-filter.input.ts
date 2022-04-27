import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudosStatus } from './asigned-kudos-status.enum';
import { NestedEnumAsignedKudosStatusWithAggregatesFilter } from './nested-enum-asigned-kudos-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumAsignedKudosStatusFilter } from './nested-enum-asigned-kudos-status-filter.input';

@InputType()
export class EnumAsignedKudosStatusWithAggregatesFilter {

    @Field(() => AsignedKudosStatus, {nullable:true})
    equals?: keyof typeof AsignedKudosStatus;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    in?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    notIn?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => NestedEnumAsignedKudosStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumAsignedKudosStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumAsignedKudosStatusFilter, {nullable:true})
    _min?: NestedEnumAsignedKudosStatusFilter;

    @Field(() => NestedEnumAsignedKudosStatusFilter, {nullable:true})
    _max?: NestedEnumAsignedKudosStatusFilter;
}
