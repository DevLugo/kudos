import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutKudosToInput } from '../user/user-create-nested-one-without-kudos-to.input';

@InputType()
export class KudoCreateWithoutUser_fromInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    message!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutKudosToInput, {nullable:false})
    User_to!: UserCreateNestedOneWithoutKudosToInput;
}
