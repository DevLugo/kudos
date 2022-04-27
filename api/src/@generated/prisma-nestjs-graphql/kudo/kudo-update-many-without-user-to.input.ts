import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateWithoutUser_toInput } from './kudo-create-without-user-to.input';
import { KudoCreateOrConnectWithoutUser_toInput } from './kudo-create-or-connect-without-user-to.input';
import { KudoUpsertWithWhereUniqueWithoutUser_toInput } from './kudo-upsert-with-where-unique-without-user-to.input';
import { KudoCreateManyUser_toInputEnvelope } from './kudo-create-many-user-to-input-envelope.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';
import { KudoUpdateWithWhereUniqueWithoutUser_toInput } from './kudo-update-with-where-unique-without-user-to.input';
import { KudoUpdateManyWithWhereWithoutUser_toInput } from './kudo-update-many-with-where-without-user-to.input';
import { KudoScalarWhereInput } from './kudo-scalar-where.input';

@InputType()
export class KudoUpdateManyWithoutUser_toInput {

    @Field(() => [KudoCreateWithoutUser_toInput], {nullable:true})
    create?: Array<KudoCreateWithoutUser_toInput>;

    @Field(() => [KudoCreateOrConnectWithoutUser_toInput], {nullable:true})
    connectOrCreate?: Array<KudoCreateOrConnectWithoutUser_toInput>;

    @Field(() => [KudoUpsertWithWhereUniqueWithoutUser_toInput], {nullable:true})
    upsert?: Array<KudoUpsertWithWhereUniqueWithoutUser_toInput>;

    @Field(() => KudoCreateManyUser_toInputEnvelope, {nullable:true})
    createMany?: KudoCreateManyUser_toInputEnvelope;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    set?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    disconnect?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    delete?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    connect?: Array<KudoWhereUniqueInput>;

    @Field(() => [KudoUpdateWithWhereUniqueWithoutUser_toInput], {nullable:true})
    update?: Array<KudoUpdateWithWhereUniqueWithoutUser_toInput>;

    @Field(() => [KudoUpdateManyWithWhereWithoutUser_toInput], {nullable:true})
    updateMany?: Array<KudoUpdateManyWithWhereWithoutUser_toInput>;

    @Field(() => [KudoScalarWhereInput], {nullable:true})
    deleteMany?: Array<KudoScalarWhereInput>;
}
