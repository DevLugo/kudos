import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoUpdateInput } from './asigned-kudo-update.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';

@ArgsType()
export class UpdateOneAsignedKudoArgs {

    @Field(() => AsignedKudoUpdateInput, {nullable:false})
    data!: AsignedKudoUpdateInput;

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;
}
