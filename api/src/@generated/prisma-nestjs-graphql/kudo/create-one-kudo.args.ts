import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoCreateInput } from './kudo-create.input';

@ArgsType()
export class CreateOneKudoArgs {

    @Field(() => KudoCreateInput, {nullable:false})
    data!: KudoCreateInput;
}
