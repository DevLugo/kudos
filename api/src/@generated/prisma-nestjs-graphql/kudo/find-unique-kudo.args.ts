import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';

@ArgsType()
export class FindUniqueKudoArgs {

    @Field(() => KudoWhereUniqueInput, {nullable:false})
    where!: KudoWhereUniqueInput;
}
