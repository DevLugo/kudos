import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrganizationInput } from './user-create-without-organization.input';
import { UserCreateOrConnectWithoutOrganizationInput } from './user-create-or-connect-without-organization.input';
import { UserCreateManyOrganizationInputEnvelope } from './user-create-many-organization-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutOrganizationInput {

    @Field(() => [UserCreateWithoutOrganizationInput], {nullable:true})
    create?: Array<UserCreateWithoutOrganizationInput>;

    @Field(() => [UserCreateOrConnectWithoutOrganizationInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutOrganizationInput>;

    @Field(() => UserCreateManyOrganizationInputEnvelope, {nullable:true})
    createMany?: UserCreateManyOrganizationInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
