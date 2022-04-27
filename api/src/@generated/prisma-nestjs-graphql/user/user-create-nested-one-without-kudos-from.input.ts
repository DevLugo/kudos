import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKudosFromInput } from './user-create-without-kudos-from.input';
import { UserCreateOrConnectWithoutKudosFromInput } from './user-create-or-connect-without-kudos-from.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutKudosFromInput {

    @Field(() => UserCreateWithoutKudosFromInput, {nullable:true})
    create?: UserCreateWithoutKudosFromInput;

    @Field(() => UserCreateOrConnectWithoutKudosFromInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutKudosFromInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
