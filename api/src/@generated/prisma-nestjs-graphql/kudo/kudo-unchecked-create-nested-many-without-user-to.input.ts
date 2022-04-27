import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KudoCreateWithoutUser_toInput } from './kudo-create-without-user-to.input';
import { KudoCreateOrConnectWithoutUser_toInput } from './kudo-create-or-connect-without-user-to.input';
import { KudoCreateManyUser_toInputEnvelope } from './kudo-create-many-user-to-input-envelope.input';
import { KudoWhereUniqueInput } from './kudo-where-unique.input';

@InputType()
export class KudoUncheckedCreateNestedManyWithoutUser_toInput {

    @Field(() => [KudoCreateWithoutUser_toInput], {nullable:true})
    create?: Array<KudoCreateWithoutUser_toInput>;

    @Field(() => [KudoCreateOrConnectWithoutUser_toInput], {nullable:true})
    connectOrCreate?: Array<KudoCreateOrConnectWithoutUser_toInput>;

    @Field(() => KudoCreateManyUser_toInputEnvelope, {nullable:true})
    createMany?: KudoCreateManyUser_toInputEnvelope;

    @Field(() => [KudoWhereUniqueInput], {nullable:true})
    connect?: Array<KudoWhereUniqueInput>;
}
