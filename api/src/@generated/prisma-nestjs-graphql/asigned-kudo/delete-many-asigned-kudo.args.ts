import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoWhereInput } from './asigned-kudo-where.input';

@ArgsType()
export class DeleteManyAsignedKudoArgs {

    @Field(() => AsignedKudoWhereInput, {nullable:true})
    where?: AsignedKudoWhereInput;
}
