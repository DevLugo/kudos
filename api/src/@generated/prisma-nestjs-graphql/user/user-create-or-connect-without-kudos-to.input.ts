import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutKudosToInput } from './user-create-without-kudos-to.input';

@InputType()
export class UserCreateOrConnectWithoutKudosToInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutKudosToInput, {nullable:false})
    create!: UserCreateWithoutKudosToInput;
}
