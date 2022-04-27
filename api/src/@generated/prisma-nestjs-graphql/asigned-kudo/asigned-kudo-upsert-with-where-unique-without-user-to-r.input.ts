import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithoutUserToRInput } from './asigned-kudo-update-without-user-to-r.input';
import { AsignedKudoCreateWithoutUserToRInput } from './asigned-kudo-create-without-user-to-r.input';

@InputType()
export class AsignedKudoUpsertWithWhereUniqueWithoutUserToRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoUpdateWithoutUserToRInput, {nullable:false})
    update!: AsignedKudoUpdateWithoutUserToRInput;

    @Field(() => AsignedKudoCreateWithoutUserToRInput, {nullable:false})
    create!: AsignedKudoCreateWithoutUserToRInput;
}
