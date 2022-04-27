import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AsignedKudosStatus } from './asigned-kudos-status.enum';

@InputType()
export class EnumAsignedKudosStatusFieldUpdateOperationsInput {

    @Field(() => AsignedKudosStatus, {nullable:true})
    set?: keyof typeof AsignedKudosStatus;
}
