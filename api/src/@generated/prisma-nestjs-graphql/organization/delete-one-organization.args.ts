import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationWhereUniqueInput } from './organization-where-unique.input';

@ArgsType()
export class DeleteOneOrganizationArgs {

    @Field(() => OrganizationWhereUniqueInput, {nullable:false})
    where!: OrganizationWhereUniqueInput;
}
