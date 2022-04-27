import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithoutUser_toInput } from './kudo-update-without-user-to.input';

@InputType()
export class KudoUpdateWithWhereUniqueWithoutUser_toInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoUpdateWithoutUser_toInput, {nullable:false})
    data!: KudoUpdateWithoutUser_toInput;
}
