import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithoutUserToRInput } from './asigned-kudo-update-without-user-to-r.input';

@InputType()
export class AsignedKudoUpdateWithWhereUniqueWithoutUserToRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoUpdateWithoutUserToRInput, {nullable:false})
    data!: AsignedKudoUpdateWithoutUserToRInput;
}
