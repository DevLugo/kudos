import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAsignedKudosFromInput } from './user-update-without-asigned-kudos-from.input';
import { UserCreateWithoutAsignedKudosFromInput } from './user-create-without-asigned-kudos-from.input';

@InputType()
export class UserUpsertWithoutAsignedKudosFromInput {

    @Field(() => UserUpdateWithoutAsignedKudosFromInput, {nullable:false})
    update!: UserUpdateWithoutAsignedKudosFromInput;

    @Field(() => UserCreateWithoutAsignedKudosFromInput, {nullable:false})
    create!: UserCreateWithoutAsignedKudosFromInput;
}
