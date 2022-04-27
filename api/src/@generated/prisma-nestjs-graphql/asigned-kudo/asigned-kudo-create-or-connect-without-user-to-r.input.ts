import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoCreateWithoutUserToRInput } from './asigned-kudo-create-without-user-to-r.input';

@InputType()
export class AsignedKudoCreateOrConnectWithoutUserToRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoCreateWithoutUserToRInput, {nullable:false})
    create!: AsignedKudoCreateWithoutUserToRInput;
}
