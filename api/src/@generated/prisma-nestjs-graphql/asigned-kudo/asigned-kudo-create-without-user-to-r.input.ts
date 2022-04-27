import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';
import { UserCreateNestedOneWithoutAsignedKudosFromInput } from '../user/user-create-nested-one-without-asigned-kudos-from.input';

@InputType()
export class AsignedKudoCreateWithoutUserToRInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => UserCreateNestedOneWithoutAsignedKudosFromInput, {nullable:false})
    userFromR!: UserCreateNestedOneWithoutAsignedKudosFromInput;
}
