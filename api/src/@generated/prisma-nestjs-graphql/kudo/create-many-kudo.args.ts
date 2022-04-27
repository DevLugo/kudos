import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KudoCreateManyInput } from './kudo-create-many.input';

@ArgsType()
export class CreateManyKudoArgs {

    @Field(() => [KudoCreateManyInput], {nullable:false})
    data!: Array<KudoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
