import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateManyUserToRInput } from './asigned-kudo-create-many-user-to-r.input';

@InputType()
export class AsignedKudoCreateManyUserToRInputEnvelope {

    @Field(() => [AsignedKudoCreateManyUserToRInput], {nullable:false})
    data!: Array<AsignedKudoCreateManyUserToRInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
