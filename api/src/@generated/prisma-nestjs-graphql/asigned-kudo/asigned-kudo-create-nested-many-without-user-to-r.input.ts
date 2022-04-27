import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateWithoutUserToRInput } from './asigned-kudo-create-without-user-to-r.input';
import { AsignedKudoCreateOrConnectWithoutUserToRInput } from './asigned-kudo-create-or-connect-without-user-to-r.input';
import { AsignedKudoCreateManyUserToRInputEnvelope } from './asigned-kudo-create-many-user-to-r-input-envelope.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';

@InputType()
export class AsignedKudoCreateNestedManyWithoutUserToRInput {

    @Field(() => [AsignedKudoCreateWithoutUserToRInput], {nullable:true})
    create?: Array<AsignedKudoCreateWithoutUserToRInput>;

    @Field(() => [AsignedKudoCreateOrConnectWithoutUserToRInput], {nullable:true})
    connectOrCreate?: Array<AsignedKudoCreateOrConnectWithoutUserToRInput>;

    @Field(() => AsignedKudoCreateManyUserToRInputEnvelope, {nullable:true})
    createMany?: AsignedKudoCreateManyUserToRInputEnvelope;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    connect?: Array<AsignedKudoWhereUniqueInput>;
}
