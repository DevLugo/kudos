import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAsignedKudosFromInput } from './user-create-without-asigned-kudos-from.input';
import { UserCreateOrConnectWithoutAsignedKudosFromInput } from './user-create-or-connect-without-asigned-kudos-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAsignedKudosFromInput {

    @Field(() => UserCreateWithoutAsignedKudosFromInput, {nullable:true})
    create?: UserCreateWithoutAsignedKudosFromInput;

    @Field(() => UserCreateOrConnectWithoutAsignedKudosFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
