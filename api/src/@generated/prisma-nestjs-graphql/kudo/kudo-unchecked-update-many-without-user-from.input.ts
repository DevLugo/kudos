import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateWithoutUser_fromInput } from './kudo-create-without-user-from.input';
import { KudoCreateOrConnectWithoutUser_fromInput } from './kudo-create-or-connect-without-user-from.input';
import { KudoUpsertWithWhereUniqueWithoutUser_fromInput } from './kudo-upsert-with-where-unique-without-user-from.input';
import { KudoCreateManyUser_fromInputEnvelope } from './kudo-create-many-user-from-input-envelope.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithWhereUniqueWithoutUser_fromInput } from './kudo-update-with-where-unique-without-user-from.input';
import { KudoUpdateManyWithWhereWithoutUser_fromInput } from './kudo-update-many-with-where-without-user-from.input';
import { KudoScalarWhereInput } from './kudo-scalar-where.input';

@InputType()
export class KudoUncheckedUpdateManyWithoutUser_fromInput {

    @Field(() => [KudoCreateWithoutUser_fromInput], {nullable:true})
    create?: Array<KudoCreateWithoutUser_fromInput>;

    @Field(() => [KudoCreateOrConnectWithoutUser_fromInput], {nullable:true})
    connectOrCreate?: Array<KudoCreateOrConnectWithoutUser_fromInput>;

    @Field(() => [KudoUpsertWithWhereUniqueWithoutUser_fromInput], {nullable:true})
    upsert?: Array<KudoUpsertWithWhereUniqueWithoutUser_fromInput>;

    @Field(() => KudoCreateManyUser_fromInputEnvelope, {nullable:true})
    createMany?: KudoCreateManyUser_fromInputEnvelope;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    set?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    disconnect?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    delete?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    connect?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoUpdateWithWhereUniqueWithoutUser_fromInput], {nullable:true})
    update?: Array<KudoUpdateWithWhereUniqueWithoutUser_fromInput>;

    @Field(() => [KudoUpdateManyWithWhereWithoutUser_fromInput], {nullable:true})
    updateMany?: Array<KudoUpdateManyWithWhereWithoutUser_fromInput>;

    @Field(() => [KudoScalarWhereInput], {nullable:true})
    deleteMany?: Array<KudoScalarWhereInput>;
}
