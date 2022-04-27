import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyOrganizationInput } from './user-create-many-organization.input';

@InputType()
export class UserCreateManyOrganizationInputEnvelope {

    @Field(() => [UserCreateManyOrganizationInput], {nullable:false})
    data!: Array<UserCreateManyOrganizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
