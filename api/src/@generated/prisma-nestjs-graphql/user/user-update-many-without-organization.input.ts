import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrganizationInput } from './user-create-without-organization.input';
import { UserCreateOrConnectWithoutOrganizationInput } from './user-create-or-connect-without-organization.input';
import { UserUpsertWithWhereUniqueWithoutOrganizationInput } from './user-upsert-with-where-unique-without-organization.input';
import { UserCreateManyOrganizationInputEnvelope } from './user-create-many-organization-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutOrganizationInput } from './user-update-with-where-unique-without-organization.input';
import { UserUpdateManyWithWhereWithoutOrganizationInput } from './user-update-many-with-where-without-organization.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutOrganizationInput {

    @Field(() => [UserCreateWithoutOrganizationInput], {nullable:true})
    create?: Array<UserCreateWithoutOrganizationInput>;

    @Field(() => [UserCreateOrConnectWithoutOrganizationInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => UserCreateManyOrganizationInputEnvelope, {nullable:true})
    createMany?: UserCreateManyOrganizationInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
