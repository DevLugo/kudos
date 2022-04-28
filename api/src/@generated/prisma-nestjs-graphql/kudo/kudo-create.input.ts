import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutKudosFromInput } from '../user/user-create-nested-one-without-kudos-from.input';
import { UserCreateNestedOneWithoutKudosToInput } from '../user/user-create-nested-one-without-kudos-to.input';

@InputType()
export class KudoCreateInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutKudosFromInput, {nullable:false})
    User_from!: UserCreateNestedOneWithoutKudosFromInput;

    @Field(() => UserCreateNestedOneWithoutKudosToInput, {nullable:false})
    User_to!: UserCreateNestedOneWithoutKudosToInput;
}
