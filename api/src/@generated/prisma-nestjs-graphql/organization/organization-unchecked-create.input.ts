import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutOrganizationInput } from '../user/user-unchecked-create-nested-many-without-organization.input';

@InputType()
export class OrganizationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    name!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutOrganizationInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput;
}
