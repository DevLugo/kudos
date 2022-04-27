import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAsignedKudosToInput } from './user-create-without-asigned-kudos-to.input';
import { UserCreateOrConnectWithoutAsignedKudosToInput } from './user-create-or-connect-without-asigned-kudos-to.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAsignedKudosToInput {

    @Field(() => UserCreateWithoutAsignedKudosToInput, {nullable:true})
    create?: UserCreateWithoutAsignedKudosToInput;

    @Field(() => UserCreateOrConnectWithoutAsignedKudosToInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAsignedKudosToInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
