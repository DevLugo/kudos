import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';

@InputType()
export class AsignedKudoUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;
}
