import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { HideField } from '@nestjs/graphql';
import { KudoUncheckedCreateNestedManyWithoutUser_fromInput } from '../kudo/kudo-unchecked-create-nested-many-without-user-from.input';
import { KudoUncheckedCreateNestedManyWithoutUser_toInput } from '../kudo/kudo-unchecked-create-nested-many-without-user-to.input';
import { AsignedKudoUncheckedCreateNestedManyWithoutUserToRInput } from '../asigned-kudo/asigned-kudo-unchecked-create-nested-many-without-user-to-r.input';

@InputType()
export class UserUncheckedCreateWithoutAsignedKudosFromInput {

    @Field(() => String, {nullable:true})
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

    @Field(() => String, {nullable:true})
    organizationId?: string;

    @Field(() => KudoUncheckedCreateNestedManyWithoutUser_fromInput, {nullable:true})
    KudosFrom?: KudoUncheckedCreateNestedManyWithoutUser_fromInput;

    @Field(() => KudoUncheckedCreateNestedManyWithoutUser_toInput, {nullable:true})
    KudosTo?: KudoUncheckedCreateNestedManyWithoutUser_toInput;

    @Field(() => AsignedKudoUncheckedCreateNestedManyWithoutUserToRInput, {nullable:true})
    AsignedKudosTo?: AsignedKudoUncheckedCreateNestedManyWithoutUserToRInput;
}
