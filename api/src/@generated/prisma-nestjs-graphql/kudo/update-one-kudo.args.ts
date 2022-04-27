import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoUpdateInput } from './kudo-update.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';

@ArgsType()
export class UpdateOneKudoArgs {

    @Field(() => KudoUpdateInput, {nullable:false})
    data!: KudoUpdateInput;

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;
}
