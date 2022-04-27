import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { KudoUpdateManyWithoutUser_fromInput } from '../kudo/kudo-update-many-without-user-from.input';
import { KudoUpdateManyWithoutUser_toInput } from '../kudo/kudo-update-many-without-user-to.input';
import { AsignedKudoUpdateManyWithoutUserFromRInput } from '../asigned-kudo/asigned-kudo-update-many-without-user-from-r.input';
import { AsignedKudoUpdateManyWithoutUserToRInput } from '../asigned-kudo/asigned-kudo-update-many-without-user-to-r.input';

@InputType()
export class UserUpdateWithoutOrganizationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @HideField()
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @HideField()
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => KudoUpdateManyWithoutUser_fromInput, {nullable:true})
    KudosFrom?: KudoUpdateManyWithoutUser_fromInput;

    @Field(() => KudoUpdateManyWithoutUser_toInput, {nullable:true})
    KudosTo?: KudoUpdateManyWithoutUser_toInput;

    @Field(() => AsignedKudoUpdateManyWithoutUserFromRInput, {nullable:true})
    AsignedKudosFrom?: AsignedKudoUpdateManyWithoutUserFromRInput;

    @Field(() => AsignedKudoUpdateManyWithoutUserToRInput, {nullable:true})
    AsignedKudosTo?: AsignedKudoUpdateManyWithoutUserToRInput;
}
