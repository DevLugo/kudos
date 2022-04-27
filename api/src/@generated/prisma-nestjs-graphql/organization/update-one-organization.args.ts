import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationUpdateInput } from './organization-update.input';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@ArgsType()
export class UpdateOneOrganizationArgs {

    @Field(() => OrganizationUpdateInput, {nullable:false})
    data!: OrganizationUpdateInput;

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    where!: OrganizationWhereUniqueInput;
}
