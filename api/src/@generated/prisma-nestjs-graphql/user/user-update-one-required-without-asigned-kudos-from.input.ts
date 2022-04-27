import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAsignedKudosFromInput } from './user-create-without-asigned-kudos-from.input';
import { UserCreateOrConnectWithoutAsignedKudosFromInput } from './user-create-or-connect-without-asigned-kudos-from.input';
import { UserUpsertWithoutAsignedKudosFromInput } from './user-upsert-without-asigned-kudos-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAsignedKudosFromInput } from './user-update-without-asigned-kudos-from.input';

@InputType()
export class UserUpdateOneRequiredWithoutAsignedKudosFromInput {

    @Field(() => UserCreateWithoutAsignedKudosFromInput, {nullable:true})
    create?: UserCreateWithoutAsignedKudosFromInput;

    @Field(() => UserCreateOrConnectWithoutAsignedKudosFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosFromInput;

    @Field(() => UserUpsertWithoutAsignedKudosFromInput, {nullable:true})
    upsert?: UserUpsertWithoutAsignedKudosFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAsignedKudosFromInput, {nullable:true})
    update?: UserUpdateWithoutAsignedKudosFromInput;
}
