import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { EnumAsignedKudosStatusFieldUpdateOperationsInput } from '../prisma/enum-asigned-kudos-status-field-update-operations.input';
import { UserUpdateOneRequiredWithoutAsignedKudosFromInput } from '../user/user-update-one-required-without-asigned-kudos-from.input';

@InputType()
export class AsignedKudoUpdateWithoutUserToRInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumAsignedKudosStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAsignedKudosStatusFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutAsignedKudosFromInput, {nullable:true})
    userFromR?: UserUpdateOneRequiredWithoutAsignedKudosFromInput;
}
