import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAsignedKudosFromInput } from './user-create-without-asigned-kudos-from.input';

@InputType()
export class UserCreateOrConnectWithoutAsignedKudosFromInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAsignedKudosFromInput, {nullable:false})
    create!: UserCreateWithoutAsignedKudosFromInput;
}
