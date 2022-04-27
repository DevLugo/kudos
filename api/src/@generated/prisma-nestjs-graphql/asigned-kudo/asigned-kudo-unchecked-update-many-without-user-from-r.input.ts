import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudoCreateWithoutUserFromRInput } from './asigned-kudo-create-without-user-from-r.input';
import { AsignedKudoCreateOrConnectWithoutUserFromRInput } from './asigned-kudo-create-or-connect-without-user-from-r.input';
import { AsignedKudoUpsertWithWhereUniqueWithoutUserFromRInput } from './asigned-kudo-upsert-with-where-unique-without-user-from-r.input';
import { AsignedKudoCreateManyUserFromRInputEnvelope } from './asigned-kudo-create-many-user-from-r-input-envelope.input';
import { AsignedKudoWhereUniqueInput } from './asigned-kudo-where-unique.input';
import { AsignedKudoUpdateWithWhereUniqueWithoutUserFromRInput } from './asigned-kudo-update-with-where-unique-without-user-from-r.input';
import { AsignedKudoUpdateManyWithWhereWithoutUserFromRInput } from './asigned-kudo-update-many-with-where-without-user-from-r.input';
import { AsignedKudoScalarWhereInput } from './asigned-kudo-scalar-where.input';

@InputType()
export class AsignedKudoUncheckedUpdateManyWithoutUserFromRInput {

    @Field(() => [AsignedKudoCreateWithoutUserFromRInput], {nullable:true})
    create?: Array<AsignedKudoCreateWithoutUserFromRInput>;

    @Field(() => [AsignedKudoCreateOrConnectWithoutUserFromRInput], {nullable:true})
    connectOrCreate?: Array<AsignedKudoCreateOrConnectWithoutUserFromRInput>;

    @Field(() => [AsignedKudoUpsertWithWhereUniqueWithoutUserFromRInput], {nullable:true})
    upsert?: Array<AsignedKudoUpsertWithWhereUniqueWithoutUserFromRInput>;

    @Field(() => AsignedKudoCreateManyUserFromRInputEnvelope, {nullable:true})
    createMany?: AsignedKudoCreateManyUserFromRInputEnvelope;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    set?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    disconnect?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    delete?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoWhereUniqueInput], {nullable:true})
    connect?: Array<AsignedKudoWhereUniqueInput>;

    @Field(() => [AsignedKudoUpdateWithWhereUniqueWithoutUserFromRInput], {nullable:true})
    update?: Array<AsignedKudoUpdateWithWhereUniqueWithoutUserFromRInput>;

    @Field(() => [AsignedKudoUpdateManyWithWhereWithoutUserFromRInput], {nullable:true})
    updateMany?: Array<AsignedKudoUpdateManyWithWhereWithoutUserFromRInput>;

    @Field(() => [AsignedKudoScalarWhereInput], {nullable:true})
    deleteMany?: Array<AsignedKudoScalarWhereInput>;
}
