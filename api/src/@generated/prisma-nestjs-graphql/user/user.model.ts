import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Organization } from '../organization/organization.model';
import { Kudo } from '../kudo/kudo.model';
import { AsignedKudo } from '../asigned-kudo/asigned-kudo.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Organization, {nullable:true})
    organization?: Organization | null;

    @Field(() => String, {nullable:true})
    organizationId!: string | null;

    @Field(() => [Kudo], {nullable:true})
    KudosFrom?: Array<Kudo>;

    @Field(() => [Kudo], {nullable:true})
    KudosTo?: Array<Kudo>;

    @Field(() => [AsignedKudo], {nullable:true})
    AsignedKudosFrom?: Array<AsignedKudo>;

    @Field(() => [AsignedKudo], {nullable:true})
    AsignedKudosTo?: Array<AsignedKudo>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
