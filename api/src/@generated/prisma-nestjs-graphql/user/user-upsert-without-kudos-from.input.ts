import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutKudosFromInput } from './user-update-without-kudos-from.input';
import { UserCreateWithoutKudosFromInput } from './user-create-without-kudos-from.input';

@InputType()
export class UserUpsertWithoutKudosFromInput {

    @Field(() => UserUpdateWithoutKudosFromInput, {nullable:false})
    update!: UserUpdateWithoutKudosFromInput;

    @Field(() => UserCreateWithoutKudosFromInput, {nullable:false})
    create!: UserCreateWithoutKudosFromInput;
}
