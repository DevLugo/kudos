import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithoutUserFromRInput } from './asigned-kudo-update-without-user-from-r.input';
import { AsignedKudoCreateWithoutUserFromRInput } from './asigned-kudo-create-without-user-from-r.input';

@InputType()
export class AsignedKudoUpsertWithWhereUniqueWithoutUserFromRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoUpdateWithoutUserFromRInput, {nullable:false})
    update!: AsignedKudoUpdateWithoutUserFromRInput;

    @Field(() => AsignedKudoCreateWithoutUserFromRInput, {nullable:false})
    create!: AsignedKudoCreateWithoutUserFromRInput;
}
