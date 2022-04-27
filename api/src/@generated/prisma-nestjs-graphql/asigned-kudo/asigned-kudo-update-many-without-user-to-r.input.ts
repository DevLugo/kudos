import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateWithoutUserToRInput } from './asigned-kudo-create-without-user-to-r.input';
import { AsignedKudoCreateOrConnectWithoutUserToRInput } from './asigned-kudo-create-or-connect-without-user-to-r.input';
import { AsignedKudoUpsertWithWhereUniqueWithoutUserToRInput } from './asigned-kudo-upsert-with-where-unique-without-user-to-r.input';
import { AsignedKudoCreateManyUserToRInputEnvelope } from './asigned-kudo-create-many-user-to-r-input-envelope.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithWhereUniqueWithoutUserToRInput } from './asigned-kudo-update-with-where-unique-without-user-to-r.input';
import { AsignedKudoUpdateManyWithWhereWithoutUserToRInput } from './asigned-kudo-update-many-with-where-without-user-to-r.input';
import { AsignedKudoScalarWhereInput } from './asigned-kudo-scalar-where.input';

@InputType()
export class AsignedKudoUpdateManyWithoutUserToRInput {

    @Field(() => [AsignedKudoCreateWithoutUserToRInput], {nullable:true})
    create?: Array<AsignedKudoCreateWithoutUserToRInput>;

    @Field(() => [AsignedKudoCreateOrConnectWithoutUserToRInput], {nullable:true})
    connectOrCreate?: Array<AsignedKudoCreateOrConnectWithoutUserToRInput>;

    @Field(() => [AsignedKudoUpsertWithWhereUniqueWithoutUserToRInput], {nullable:true})
    upsert?: Array<AsignedKudoUpsertWithWhereUniqueWithoutUserToRInput>;

    @Field(() => AsignedKudoCreateManyUserToRInputEnvelope, {nullable:true})
    createMany?: AsignedKudoCreateManyUserToRInputEnvelope;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    set?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    disconnect?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    delete?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    connect?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoUpdateWithWhereUniqueWithoutUserToRInput], {nullable:true})
    update?: Array<AsignedKudoUpdateWithWhereUniqueWithoutUserToRInput>;

    @Field(() => [AsignedKudoUpdateManyWithWhereWithoutUserToRInput], {nullable:true})
    updateMany?: Array<AsignedKudoUpdateManyWithWhereWithoutUserToRInput>;

    @Field(() => [AsignedKudoScalarWhereInput], {nullable:true})
    deleteMany?: Array<AsignedKudoScalarWhereInput>;
}
