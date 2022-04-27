import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoWhereInput } from './kudo-where.input';
import { KudoOrderByWithRelationInput } from './kudo-order-by-with-relation.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KudoScalarFieldEnum } from './kudo-scalar-field.enum';

@ArgsType()
export class FindManyKudoArgs {

    @Field(() => KudoWhereInput, {nullable:true})
    where?: KudoWhereInput;

    @Field(() => [KudoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KudoOrderByWithRelationInput>;

    @Field(() => KudoWhereUniqueInput, {nullable:true})
    cursor?: KudoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KudoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof KudoScalarFieldEnum>;
}
