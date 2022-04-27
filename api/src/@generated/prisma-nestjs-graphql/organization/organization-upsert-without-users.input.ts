import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrganizationUpdateWithoutUsersInput } from './organization-update-without-users.input';
import { OrganizationCreateWithoutUsersInput } from './organization-create-without-users.input';

@InputType()
export class OrganizationUpsertWithoutUsersInput {

    @Field(() => OrganizationUpdateWithoutUsersInput, {nullable:false})
    update!: OrganizationUpdateWithoutUsersInput;

    @Field(() => OrganizationCreateWithoutUsersInput, {nullable:false})
    create!: OrganizationCreateWithoutUsersInput;
}
