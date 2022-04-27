import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoUpdateManyMutationInput } from './asigned-kudo-update-many-mutation.input';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';

@ArgsType()
export class UpdateManyAsignedKudoArgs {

    @Field(() => AsignedKudoUpdateManyMutationInput, {nullable:false})
    data!: AsignedKudoUpdateManyMutationInput;

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    where?: AsignedKudoWhereInput;
}
