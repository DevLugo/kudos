import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutKudosFromInput } from './user-create-without-kudos-from.input';

@InputType()
export class UserCreateOrConnectWithoutKudosFromInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutKudosFromInput, {nullable:false})
    create!: UserCreateWithoutKudosFromInput;
}
