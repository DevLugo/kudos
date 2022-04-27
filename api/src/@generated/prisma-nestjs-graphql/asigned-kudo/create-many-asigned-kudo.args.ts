import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AsignedKudoCreateManyInput } from './asigned-kudo-create-many.input';

@ArgsType()
export class CreateManyAsignedKudoArgs {

    @Field(() => [AsignedKudoCreateManyInput], {nullable:false})
    data!: Array<AsignedKudoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
