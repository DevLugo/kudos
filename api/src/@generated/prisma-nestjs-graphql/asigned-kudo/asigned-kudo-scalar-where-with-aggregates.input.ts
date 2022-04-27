import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumAsignedKudosStatusWithAggregatesFilter } from '../prisma/enum-asigned-kudos-status-with-aggregates-filter.input';

@InputType()
export class AsignedKudoScalarWhereWithAggregatesInput {

    @Field(() => [AsignedKudoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AsignedKudoScalarWhereWithAggregatesInput>;

    @Field(() => [AsignedKudoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AsignedKudoScalarWhereWithAggregatesInput>;

    @Field(() => [AsignedKudoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AsignedKudoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumAsignedKudosStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAsignedKudosStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    from?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    to?: StringWithAggregatesFilter;
}
