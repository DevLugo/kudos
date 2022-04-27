import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoCreateInput } from './asigned-kudo-create.input';
import { AsignedKudoUpdateInput } from './asigned-kudo-update.input';

@ArgsType()
export class UpsertOneAsignedKudoArgs {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoCreateInput, {nullable:false})
    create!: AsignedKudoCreateInput;

    @Field(() => AsignedKudoUpdateInput, {nullable:false})
    update!: AsignedKudoUpdateInput;
}
