import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationUpdateManyMutationInput } from './organization-update-many-mutation.input';
import { OrganizationWhereInput } from './organization-where.input';

@ArgsType()
export class UpdateManyOrganizationArgs {

    @Field(() => OrganizationUpdateManyMutationInput, {nullable:false})
    data!: OrganizationUpdateManyMutationInput;

    @Field(() => OrganizationWhereInput, {nullable:true})
    where?: OrganizationWhereInput;
}
