import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';
import { AsignedKudoOrderByWithRelationInput } from './asigned-kudo-order-by-with-relation.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AsignedKudoScalarFieldEnum } from './asigned-kudo-scalar-field.enum';

@ArgsType()
export class FindFirstAsignedKudoArgs {

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    where?: AsignedKudoWhereInput;

    @Field(() => [AsignedKudoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AsignedKudoOrderByWithRelationInput>;

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:true})
    cursor?: AsignedKudoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AsignedKudoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AsignedKudoScalarFieldEnum>;
}
