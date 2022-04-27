import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAsignedKudosToInput } from './user-create-without-asigned-kudos-to.input';

@InputType()
export class UserCreateOrConnectWithoutAsignedKudosToInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAsignedKudosToInput, {nullable:false})
    create!: UserCreateWithoutAsignedKudosToInput;
}
