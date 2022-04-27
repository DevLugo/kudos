import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OrganizationRelationFilter } from '../organization/organization-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { KudoListRelationFilter } from '../kudo/kudo-list-relation-filter.input';
import { AsignedKudoListRelationFilter } from '../asigned-kudo/asigned-kudo-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @HideField()
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    organizationId?: StringNullableFilter;

    @Field(() => KudoListRelationFilter, {nullable:true})
    KudosFrom?: KudoListRelationFilter;

    @Field(() => KudoListRelationFilter, {nullable:true})
    KudosTo?: KudoListRelationFilter;

    @Field(() => AsignedKudoListRelationFilter, {nullable:true})
    AsignedKudosFrom?: AsignedKudoListRelationFilter;

    @Field(() => AsignedKudoListRelationFilter, {nullable:true})
    AsignedKudosTo?: AsignedKudoListRelationFilter;
}
