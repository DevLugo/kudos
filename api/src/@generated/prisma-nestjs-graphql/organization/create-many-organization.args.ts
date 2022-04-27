import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrganizationCreateManyInput } from './organization-create-many.input';

@ArgsType()
export class CreateManyOrganizationArgs {

    @Field(() => [OrganizationCreateManyInput], {nullable:false})
    data!: Array<OrganizationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
