import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudosStatus } from './asigned-kudos-status.enum';
import { NestedEnumAsignedKudosStatusFilter } from './nested-enum-asigned-kudos-status-filter.input';

@InputType()
export class EnumAsignedKudosStatusFilter {

    @Field(() => AsignedKudosStatus, {nullable:true})
    equals?: keyof typeof AsignedKudosStatus;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    in?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    notIn?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => NestedEnumAsignedKudosStatusFilter, {nullable:true})
    not?: NestedEnumAsignedKudosStatusFilter;
}
