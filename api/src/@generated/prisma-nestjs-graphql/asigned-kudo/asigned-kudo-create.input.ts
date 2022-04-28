import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';
import { UserCreateNestedOneWithoutAsignedKudosFromInput } from '../user/user-create-nested-one-without-asigned-kudos-from.input';
import { UserCreateNestedOneWithoutAsignedKudosToInput } from '../user/user-create-nested-one-without-asigned-kudos-to.input';

@InputType()
export class AsignedKudoCreateInput {

    @HideField()
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => UserCreateNestedOneWithoutAsignedKudosFromInput, {nullable:false})
    userFromR!: UserCreateNestedOneWithoutAsignedKudosFromInput;

    @Field(() => UserCreateNestedOneWithoutAsignedKudosToInput, {nullable:false})
    userToR!: UserCreateNestedOneWithoutAsignedKudosToInput;
}
