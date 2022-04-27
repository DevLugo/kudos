import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';
import { OrganizationCreateInput } from './organization-create.input';
import { OrganizationUpdateInput } from './organization-update.input';

@ArgsType()
export class UpsertOneOrganizationArgs {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    where!: OrganizationWhereUniqueInput;

    @Field(() => OrganizationCreateInput, {nullable:false})
    create!: OrganizationCreateInput;

    @Field(() => OrganizationUpdateInput, {nullable:false})
    update!: OrganizationUpdateInput;
}
