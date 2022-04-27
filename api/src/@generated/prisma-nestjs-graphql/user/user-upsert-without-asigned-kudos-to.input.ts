import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAsignedKudosToInput } from './user-update-without-asigned-kudos-to.input';
import { UserCreateWithoutAsignedKudosToInput } from './user-create-without-asigned-kudos-to.input';

@InputType()
export class UserUpsertWithoutAsignedKudosToInput {

    @Field(() => UserUpdateWithoutAsignedKudosToInput, {nullable:false})
    update!: UserUpdateWithoutAsignedKudosToInput;

    @Field(() => UserCreateWithoutAsignedKudosToInput, {nullable:false})
    create!: UserCreateWithoutAsignedKudosToInput;
}
