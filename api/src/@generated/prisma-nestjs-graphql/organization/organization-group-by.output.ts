import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrganizationCountAggregate } from './organization-count-aggregate.output';
import { OrganizationMinAggregate } from './organization-min-aggregate.output';
import { OrganizationMaxAggregate } from './organization-max-aggregate.output';

@ObjectType()
export class OrganizationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrganizationCountAggregate, {nullable:true})
    _count?: OrganizationCountAggregate;

    @Field(() => OrganizationMinAggregate, {nullable:true})
    _min?: OrganizationMinAggregate;

    @Field(() => OrganizationMaxAggregate, {nullable:true})
    _max?: OrganizationMaxAggregate;
}
