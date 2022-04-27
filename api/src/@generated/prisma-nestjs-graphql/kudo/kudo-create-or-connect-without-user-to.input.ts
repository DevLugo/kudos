import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoCreateWithoutUser_toInput } from './kudo-create-without-user-to.input';

@InputType()
export class KudoCreateOrConnectWithoutUser_toInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoCreateWithoutUser_toInput, {nullable:false})
    create!: KudoCreateWithoutUser_toInput;
}
