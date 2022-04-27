import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutKudosFromInput } from '../user/user-update-one-required-without-kudos-from.input';
import { UserUpdateOneRequiredWithoutKudosToInput } from '../user/user-update-one-required-without-kudos-to.input';

@InputType()
export class KudoUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @HideField()
    message?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutKudosFromInput, {nullable:true})
    User_from?: UserUpdateOneRequiredWithoutKudosFromInput;

    @Field(() => UserUpdateOneRequiredWithoutKudosToInput, {nullable:true})
    User_to?: UserUpdateOneRequiredWithoutKudosToInput;
}
