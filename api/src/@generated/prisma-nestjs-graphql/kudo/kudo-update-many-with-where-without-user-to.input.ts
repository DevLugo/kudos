import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoScalarWhereInput } from './kudo-scalar-where.input';
import { KudoUpdateManyMutationInput } from './kudo-update-many-mutation.input';

@InputType()
export class KudoUpdateManyWithWhereWithoutUser_toInput {

    @Field(() => KudoScalarWhereInput, {nullable:false})
    where!: KudoScalarWhereInput;

    @Field(() => KudoUpdateManyMutationInput, {nullable:false})
    data!: KudoUpdateManyMutationInput;
}
