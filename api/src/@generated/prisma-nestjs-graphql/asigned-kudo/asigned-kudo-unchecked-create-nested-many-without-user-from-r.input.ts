import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateWithoutUserFromRInput } from './asigned-kudo-create-without-user-from-r.input';
import { AsignedKudoCreateOrConnectWithoutUserFromRInput } from './asigned-kudo-create-or-connect-without-user-from-r.input';
import { AsignedKudoCreateManyUserFromRInputEnvelope } from './asigned-kudo-create-many-user-from-r-input-envelope.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';

@InputType()
export class AsignedKudoUncheckedCreateNestedManyWithoutUserFromRInput {

    @Field(() => [AsignedKudoCreateWithoutUserFromRInput], {nullable:true})
    create?: Array<AsignedKudoCreateWithoutUserFromRInput>;

    @Field(() => [AsignedKudoCreateOrConnectWithoutUserFromRInput], {nullable:true})
    connectOrCreate?: Array<AsignedKudoCreateOrConnectWithoutUserFromRInput>;

    @Field(() => AsignedKudoCreateManyUserFromRInputEnvelope, {nullable:true})
    createMany?: AsignedKudoCreateManyUserFromRInputEnvelope;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    connect?: Array<AsignedKudoWhereUniqueInput>;
}
