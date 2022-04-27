import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutOrganizationInput } from '../user/user-create-nested-many-without-organization.input';

@InputType()
export class OrganizationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutOrganizationInput, {nullable:true})
    users?: UserCreateNestedManyWithoutOrganizationInput;
}
