import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';

@InputType()
export class OrganizationCreateOrConnectWithoutUsersInput {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:false})
    create!: OrganizationCreateWithoutUsersInput;
}
