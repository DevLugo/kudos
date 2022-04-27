import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoScalarWhereInput } from './asigned-kudo-scalar-where.input';
import { AsignedKudoUpdateManyMutationInput } from './asigned-kudo-update-many-mutation.input';

@InputType()
export class AsignedKudoUpdateManyWithWhereWithoutUserToRInput {

    @Field(() => AsignedKudoScalarWhereInput, {nullable:false})
    where!: AsignedKudoScalarWhereInput;

    @Field(() => AsignedKudoUpdateManyMutationInput, {nullable:false})
    data!: AsignedKudoUpdateManyMutationInput;
}
