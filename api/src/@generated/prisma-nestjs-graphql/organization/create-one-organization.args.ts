import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationCreateInput } from './organization-create.input';

@ArgsType()
export class CreateOneOrganizationArgs {

    @Field(() => OrganizationCreateInput, {nullable:false})
    data!: OrganizationCreateInput;
}
