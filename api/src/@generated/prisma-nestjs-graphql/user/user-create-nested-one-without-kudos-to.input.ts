import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKudosToInput } from './user-create-without-kudos-to.input';
import { UserCreateOrConnectWithoutKudosToInput } from './user-create-or-connect-without-kudos-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutKudosToInput {

    @Field(() => UserCreateWithoutKudosToInput, {nullable:true})
    create?: UserCreateWithoutKudosToInput;

    @Field(() => UserCreateOrConnectWithoutKudosToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutKudosToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
