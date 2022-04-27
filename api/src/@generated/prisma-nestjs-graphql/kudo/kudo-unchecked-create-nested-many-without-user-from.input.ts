import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateWithoutUser_fromInput } from './kudo-create-without-user-from.input';
import { KudoCreateOrConnectWithoutUser_fromInput } from './kudo-create-or-connect-without-user-from.input';
import { KudoCreateManyUser_fromInputEnvelope } from './kudo-create-many-user-from-input-envelope.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';

@InputType()
export class KudoUncheckedCreateNestedManyWithoutUser_fromInput {

    @Field(() => [KudoCreateWithoutUser_fromInput], {nullable:true})
    create?: Array<KudoCreateWithoutUser_fromInput>;

    @Field(() => [KudoCreateOrConnectWithoutUser_fromInput], {nullable:true})
    connectOrCreate?: Array<KudoCreateOrConnectWithoutUser_fromInput>;

    @Field(() => KudoCreateManyUser_fromInputEnvelope, {nullable:true})
    createMany?: KudoCreateManyUser_fromInputEnvelope;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    connect?: Array<KudoWhereUniqueInput>;
}
