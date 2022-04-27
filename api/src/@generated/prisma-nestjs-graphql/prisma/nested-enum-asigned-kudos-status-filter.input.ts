import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudosStatus } from './asigned-kudos-status.enum';

@InputType()
export class NestedEnumAsignedKudosStatusFilter {

    @Field(() => AsignedKudosStatus, {nullable:true})
    equals?: keyof typeof AsignedKudosStatus;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    in?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => [AsignedKudosStatus], {nullable:true})
    notIn?: Array<keyof typeof AsignedKudosStatus>;

    @Field(() => NestedEnumAsignedKudosStatusFilter, {nullable:true})
    not?: NestedEnumAsignedKudosStatusFilter;
}
