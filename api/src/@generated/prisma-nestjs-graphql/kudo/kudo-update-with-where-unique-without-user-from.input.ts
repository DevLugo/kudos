import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithoutUser_fromInput } from './kudo-update-without-user-from.input';

@InputType()
export class KudoUpdateWithWhereUniqueWithoutUser_fromInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoUpdateWithoutUser_fromInput, {nullable:false})
    data!: KudoUpdateWithoutUser_fromInput;
}
