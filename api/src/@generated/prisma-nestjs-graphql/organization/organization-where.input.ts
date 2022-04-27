import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class OrganizationWhereInput {

    @Field(() => [OrganizationWhereInput], {nullable:true})
    AND?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    OR?: Array<OrganizationWhereInput>;

    @Field(() => [OrganizationWhereInput], {nullable:true})
    NOT?: Array<OrganizationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    name?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}
