import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { KudoUncheckedUpdateManyWithoutUser_fromInput } from '../kudo/kudo-unchecked-update-many-without-user-from.input';
import { AsignedKudoUncheckedUpdateManyWithoutUserFromRInput } from '../asigned-kudo/asigned-kudo-unchecked-update-many-without-user-from-r.input';
import { AsignedKudoUncheckedUpdateManyWithoutUserToRInput } from '../asigned-kudo/asigned-kudo-unchecked-update-many-without-user-to-r.input';

@InputType()
export class UserUncheckedUpdateWithoutKudosToInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    organizationId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => KudoUncheckedUpdateManyWithoutUser_fromInput, {nullable:true})
    KudosFrom?: KudoUncheckedUpdateManyWithoutUser_fromInput;

    @Field(() => AsignedKudoUncheckedUpdateManyWithoutUserFromRInput, {nullable:true})
    AsignedKudosFrom?: AsignedKudoUncheckedUpdateManyWithoutUserFromRInput;

    @Field(() => AsignedKudoUncheckedUpdateManyWithoutUserToRInput, {nullable:true})
    AsignedKudosTo?: AsignedKudoUncheckedUpdateManyWithoutUserToRInput;
}
