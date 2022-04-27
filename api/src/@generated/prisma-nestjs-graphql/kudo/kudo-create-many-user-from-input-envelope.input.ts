import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateManyUser_fromInput } from './kudo-create-many-user-from.input';

@InputType()
export class KudoCreateManyUser_fromInputEnvelope {

    @Field(() => [KudoCreateManyUser_fromInput], {nullable:false})
    data!: Array<KudoCreateManyUser_fromInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
