import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { OrganizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { KudoOrderByRelationAggregateInput } from '../kudo/kudo-order-by-relation-aggregate.input';
import { AsignedKudoOrderByRelationAggregateInput } from '../asigned-kudo/asigned-kudo-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @HideField()
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OrganizationOrderByWithRelationInput, {nullable:true})
    organization?: OrganizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    organizationId?: keyof typeof SortOrder;

    @Field(() => KudoOrderByRelationAggregateInput, {nullable:true})
    KudosFrom?: KudoOrderByRelationAggregateInput;

    @Field(() => KudoOrderByRelationAggregateInput, {nullable:true})
    KudosTo?: KudoOrderByRelationAggregateInput;

    @Field(() => AsignedKudoOrderByRelationAggregateInput, {nullable:true})
    AsignedKudosFrom?: AsignedKudoOrderByRelationAggregateInput;

    @Field(() => AsignedKudoOrderByRelationAggregateInput, {nullable:true})
    AsignedKudosTo?: AsignedKudoOrderByRelationAggregateInput;
}
