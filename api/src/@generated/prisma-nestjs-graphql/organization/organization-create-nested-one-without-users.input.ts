import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';
import { OrganizationCreateOrConnectWithoutUsersInput } from './organization-create-or-connect-without-users.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class OrganizationCreateNestedOneWithoutUsersInput {

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:true})
    create?: OrganizationCreateWithoutUsersInput;

    @Field(() => OrganizationCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    connect?: OrganizationWhereUniqueInput;
}
