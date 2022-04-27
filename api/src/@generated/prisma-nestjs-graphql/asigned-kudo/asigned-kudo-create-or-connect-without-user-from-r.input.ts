import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoCreateWithoutUserFromRInput } from './asigned-kudo-create-without-user-from-r.input';

@InputType()
export class AsignedKudoCreateOrConnectWithoutUserFromRInput {

    @Field(() => AsignedKudoWhereUniqueInput, {nullable:false})
    where!: AsignedKudoWhereUniqueInput;

    @Field(() => AsignedKudoCreateWithoutUserFromRInput, {nullable:false})
    create!: AsignedKudoCreateWithoutUserFromRInput;
}
