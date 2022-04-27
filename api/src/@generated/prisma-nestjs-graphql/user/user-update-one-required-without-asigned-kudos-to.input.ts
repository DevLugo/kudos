import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAsignedKudosToInput } from './user-create-without-asigned-kudos-to.input';
import { UserCreateOrConnectWithoutAsignedKudosToInput } from './user-create-or-connect-without-asigned-kudos-to.input';
import { UserUpsertWithoutAsignedKudosToInput } from './user-upsert-without-asigned-kudos-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAsignedKudosToInput } from './user-update-without-asigned-kudos-to.input';

@InputType()
export class UserUpdateOneRequiredWithoutAsignedKudosToInput {

    @Field(() => UserCreateWithoutAsignedKudosToInput, {nullable:true})
    create?: UserCreateWithoutAsignedKudosToInput;

    @Field(() => UserCreateOrConnectWithoutAsignedKudosToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosToInput;

    @Field(() => UserUpsertWithoutAsignedKudosToInput, {nullable:true})
    upsert?: UserUpsertWithoutAsignedKudosToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAsignedKudosToInput, {nullable:true})
    update?: UserUpdateWithoutAsignedKudosToInput;
}
