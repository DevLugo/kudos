import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereInput } from './kudo-where.input';

@ArgsType()
export class DeleteManyKudoArgs {

    @Field(() => KudoWhereInput, {nullable:true})
    where?: KudoWhereInput;
}
