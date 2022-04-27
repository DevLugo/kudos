import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoCreateInput } from './asigned-kudo-create.input';

@ArgsType()
export class CreateOneAsignedKudoArgs {

    @Field(() => AsignedKudoCreateInput, {nullable:false})
    data!: AsignedKudoCreateInput;
}
