import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumAsignedKudosStatusFilter } from '../prisma/enum-asigned-kudos-status-filter.input';

@InputType()
export class AsignedKudoScalarWhereInput {

    @Field(() => [AsignedKudoScalarWhereInput], {nullable:true})
    AND?: Array<AsignedKudoScalarWhereInput>;

    @Field(() => [AsignedKudoScalarWhereInput], {nullable:true})
    OR?: Array<AsignedKudoScalarWhereInput>;

    @Field(() => [AsignedKudoScalarWhereInput], {nullable:true})
    NOT?: Array<AsignedKudoScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => EnumAsignedKudosStatusFilter, {nullable:true})
    status?: EnumAsignedKudosStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    from?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    to?: StringFilter;
}
