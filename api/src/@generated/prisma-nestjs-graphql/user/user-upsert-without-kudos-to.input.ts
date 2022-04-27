import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutKudosToInput } from './user-update-without-kudos-to.input';
import { UserCreateWithoutKudosToInput } from './user-create-without-kudos-to.input';

@InputType()
export class UserUpsertWithoutKudosToInput {

    @Field(() => UserUpdateWithoutKudosToInput, {nullable:false})
    update!: UserUpdateWithoutKudosToInput;

    @Field(() => UserCreateWithoutKudosToInput, {nullable:false})
    create!: UserCreateWithoutKudosToInput;
}
