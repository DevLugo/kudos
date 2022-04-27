import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';
import { OrganizationCreateOrConnectWithoutUsersInput } from './organization-create-or-connect-without-users.input';
import { OrganizationUpsertWithoutUsersInput } from './organization-upsert-without-users.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationUpdateWithoutUsersInput } from './organization-update-without-users.input';

@InputType()
export class OrganizationUpdateOneWithoutUsersInput {

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:true})
    create?: OrganizationCreateWithoutUsersInput;

    @Field(() => OrganizationCreateOrConnectWithoutUsersInput, {nullable:true})
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;

    @Field(() => OrganizationUpsertWithoutUsersInput, {nullable:true})
    upsert?: OrganizationUpsertWithoutUsersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrganizationWhereUniqueInput, {nullable:true})
    connect?: OrganizationWhereUniqueInput;

    @Field(() => OrganizationUpdateWithoutUsersInput, {nullable:true})
    update?: OrganizationUpdateWithoutUsersInput;
}
