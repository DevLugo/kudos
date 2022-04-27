import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoCreateWithoutUser_fromInput } from './kudo-create-without-user-from.input';

@InputType()
export class KudoCreateOrConnectWithoutUser_fromInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoCreateWithoutUser_fromInput, {nullable:false})
    create!: KudoCreateWithoutUser_fromInput;
}
