import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateManyUser_toInput } from './kudo-create-many-user-to.input';

@InputType()
export class KudoCreateManyUser_toInputEnvelope {

    @Field(() => [KudoCreateManyUser_toInput], {nullable:false})
    data!: Array<KudoCreateManyUser_toInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
