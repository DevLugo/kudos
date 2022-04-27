import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOrganizationInput } from './user-update-without-organization.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOrganizationInput, {nullable:false})
    data!: UserUpdateWithoutOrganizationInput;
}
