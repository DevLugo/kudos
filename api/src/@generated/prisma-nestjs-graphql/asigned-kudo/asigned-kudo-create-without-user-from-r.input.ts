import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';
import { UserCreateNestedOneWithoutAsignedKudosToInput } from '../user/user-create-nested-one-without-asigned-kudos-to.input';

@InputType()
export class AsignedKudoCreateWithoutUserFromRInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => UserCreateNestedOneWithoutAsignedKudosToInput, {nullable:false})
    userToR!: UserCreateNestedOneWithoutAsignedKudosToInput;
}
