import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoWhereInput } from './kudo-where.input';

@InputType()
export class KudoListRelationFilter {

    @Field(() => KudoWhereInput, {nullable:true})
    every?: KudoWhereInput;

    @Field(() => KudoWhereInput, {nullable:true})
    some?: KudoWhereInput;

    @Field(() => KudoWhereInput, {nullable:true})
    none?: KudoWhereInput;
}
