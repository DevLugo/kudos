import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoCreateInput } from './kudo-create.input';
import { KudoUpdateInput } from './kudo-update.input';

@ArgsType()
export class UpsertOneKudoArgs {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;

    @Field(() => KudoCreateInput, {nullable:false})
    create!: KudoCreateInput;

    @Field(() => KudoUpdateInput, {nullable:false})
    update!: KudoUpdateInput;
}
