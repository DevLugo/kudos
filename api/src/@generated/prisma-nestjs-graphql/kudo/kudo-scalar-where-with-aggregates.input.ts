import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class KudoScalarWhereWithAggregatesInput {

    @Field(() => [KudoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<KudoScalarWhereWithAggregatesInput>;

    @Field(() => [KudoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<KudoScalarWhereWithAggregatesInput>;

    @Field(() => [KudoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<KudoScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    message?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    from?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    to?: StringWithAggregatesFilter;
}
