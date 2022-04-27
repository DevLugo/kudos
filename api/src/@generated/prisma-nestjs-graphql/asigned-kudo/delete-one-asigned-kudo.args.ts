import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';

@ArgsType()
export class DeleteOneAsignedKudoArgs {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;
}
