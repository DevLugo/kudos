import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKudosToInput } from './user-create-without-kudos-to.input';
import { UserCreateOrConnectWithoutKudosToInput } from './user-create-or-connect-without-kudos-to.input';
import { UserUpsertWithoutKudosToInput } from './user-upsert-without-kudos-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutKudosToInput } from './user-update-without-kudos-to.input';

@InputType()
export class UserUpdateOneRequiredWithoutKudosToInput {

    @Field(() => UserCreateWithoutKudosToInput, {nullable:true})
    create?: UserCreateWithoutKudosToInput;

    @Field(() => UserCreateOrConnectWithoutKudosToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutKudosToInput;

    @Field(() => UserUpsertWithoutKudosToInput, {nullable:true})
    upsert?: UserUpsertWithoutKudosToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutKudosToInput, {nullable:true})
    update?: UserUpdateWithoutKudosToInput;
}
