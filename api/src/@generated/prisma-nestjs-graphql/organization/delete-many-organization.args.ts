import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationWhereInput } from './organization-where.input';

@ArgsType()
export class DeleteManyOrganizationArgs {

    @Field(() => OrganizationWhereInput, {nullable:true})
    where?: OrganizationWhereInput;
}
