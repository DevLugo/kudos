import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoUpdateManyMutationInput } from './kudo-update-many-mutation.input';
import { KudoWhereInput } from './kudo-where.input';

@ArgsType()
export class UpdateManyKudoArgs {

    @Field(() => KudoUpdateManyMutationInput, {nullable:false})
    data!: KudoUpdateManyMutationInput;

    @Field(() => KudoWhereInput, {nullable:true})
    where?: KudoWhereInput;
}
