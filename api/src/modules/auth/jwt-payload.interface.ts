import { Field, ObjectType } from "@nestjs/graphql";
import { Organization } from "src/@generated/prisma-nestjs-graphql/organization/organization.model";

@ObjectType()
export class IJwtPayload {
    @Field(() => String, {nullable:false})
    id: string;

    @Field(() => String, {nullable:false})
    email: string;

    @Field(() => Organization, {nullable:false})
    organization: Organization;
    
    @Field(() => String, {nullable:false})
    iat?: Date;
}