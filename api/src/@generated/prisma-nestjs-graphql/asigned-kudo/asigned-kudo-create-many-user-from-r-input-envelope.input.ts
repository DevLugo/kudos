import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateManyUserFromRInput } from './asigned-kudo-create-many-user-from-r.input';

@InputType()
export class AsignedKudoCreateManyUserFromRInputEnvelope {

    @Field(() => [AsignedKudoCreateManyUserFromRInput], {nullable:false})
    data!: Array<AsignedKudoCreateManyUserFromRInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
