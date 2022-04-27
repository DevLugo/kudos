import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';

@InputType()
export class AsignedKudoListRelationFilter {

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    every?: AsignedKudoWhereInput;

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    some?: AsignedKudoWhereInput;

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    none?: AsignedKudoWhereInput;
}
