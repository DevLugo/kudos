import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class OrganizationMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @HideField()
    name?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
