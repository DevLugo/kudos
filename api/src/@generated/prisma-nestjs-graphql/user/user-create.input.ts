import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { OrganizationCreateNestedOneWithoutUsersInput } from '../organization/organization-create-nested-one-without-users.input';
import { KudoCreateNestedManyWithoutUser_fromInput } from '../kudo/kudo-create-nested-many-without-user-from.input';
import { KudoCreateNestedManyWithoutUser_toInput } from '../kudo/kudo-create-nested-many-without-user-to.input';
import { AsignedKudoCreateNestedManyWithoutUserFromRInput } from '../asigned-kudo/asigned-kudo-create-nested-many-without-user-from-r.input';
import { AsignedKudoCreateNestedManyWithoutUserToRInput } from '../asigned-kudo/asigned-kudo-create-nested-many-without-user-to-r.input';

@InputType()
export class UserCreateInput {

    @HideField()
    id?: string;

    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    email!: string;

    @HideField()
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => OrganizationCreateNestedOneWithoutUsersInput, {nullable:true})
    organization?: OrganizationCreateNestedOneWithoutUsersInput;

    @Field(() => KudoCreateNestedManyWithoutUser_fromInput, {nullable:true})
    KudosFrom?: KudoCreateNestedManyWithoutUser_fromInput;

    @Field(() => KudoCreateNestedManyWithoutUser_toInput, {nullable:true})
    KudosTo?: KudoCreateNestedManyWithoutUser_toInput;

    @Field(() => AsignedKudoCreateNestedManyWithoutUserFromRInput, {nullable:true})
    AsignedKudosFrom?: AsignedKudoCreateNestedManyWithoutUserFromRInput;

    @Field(() => AsignedKudoCreateNestedManyWithoutUserToRInput, {nullable:true})
    AsignedKudosTo?: AsignedKudoCreateNestedManyWithoutUserToRInput;
}
