import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class KudoUncheckedCreateWithoutUser_fromInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    message!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    to!: string;
}
