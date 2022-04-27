import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKudosFromInput } from './user-create-without-kudos-from.input';
import { UserCreateOrConnectWithoutKudosFromInput } from './user-create-or-connect-without-kudos-from.input';
import { UserUpsertWithoutKudosFromInput } from './user-upsert-without-kudos-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutKudosFromInput } from './user-update-without-kudos-from.input';

@InputType()
export class UserUpdateOneRequiredWithoutKudosFromInput {

    @Field(() => UserCreateWithoutKudosFromInput, {nullable:true})
    create?: UserCreateWithoutKudosFromInput;

    @Field(() => UserCreateOrConnectWithoutKudosFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutKudosFromInput;

    @Field(() => UserUpsertWithoutKudosFromInput, {nullable:true})
    upsert?: UserUpsertWithoutKudosFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutKudosFromInput, {nullable:true})
    update?: UserUpdateWithoutKudosFromInput;
}
