import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithoutUser_toInput } from './kudo-update-without-user-to.input';
import { KudoCreateWithoutUser_toInput } from './kudo-create-without-user-to.input';

@InputType()
export class KudoUpsertWithWhereUniqueWithoutUser_toInput {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoUpdateWithoutUser_toInput, {nullable:false})
    update!: KudoUpdateWithoutUser_toInput;

    @Field(() => KudoCreateWithoutUser_toInput, {nullable:false})
    create!: KudoCreateWithoutUser_toInput;
}
