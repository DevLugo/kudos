import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithoutUser_fromInput } from './kudo-update-without-user-from.input';
import { KudoCreateWithoutUser_fromInput } from './kudo-create-without-user-from.input';

@InputType()
export class KudoUpsertWithWhereUniqueWithoutUser_fromInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoUpdateWithoutUser_fromInput, {nullable:false})
    update!: KudoUpdateWithoutUser_fromInput;

    @Field(() => KudoCreateWithoutUser_fromInput, {nullable:false})
    create!: KudoCreateWithoutUser_fromInput;
}
