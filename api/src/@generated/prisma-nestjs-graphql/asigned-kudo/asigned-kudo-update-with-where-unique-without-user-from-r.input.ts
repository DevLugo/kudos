import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithoutUserFromRInput } from './asigned-kudo-update-without-user-from-r.input';

@InputType()
export class AsignedKudoUpdateWithWhereUniqueWithoutUserFromRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoUpdateWithoutUserFromRInput, {nullable:false})
    data!: AsignedKudoUpdateWithoutUserFromRInput;
}
