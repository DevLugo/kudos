import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumAsignedKudosStatusFilter } from '../prisma/enum-asigned-kudos-status-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AsignedKudoWhereInput {

    @Field(() => [AsignedKudoWhereInput], {nullable:true})
    AND?: Array<AsignedKudoWhereInput>;

    @Field(() => [AsignedKudoWhereInput], {nullable:true})
    OR?: Array<AsignedKudoWhereInput>;

    @Field(() => [AsignedKudoWhereInput], {nullable:true})
    NOT?: Array<AsignedKudoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => EnumAsignedKudosStatusFilter, {nullable:true})
    status?: EnumAsignedKudosStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    from?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    to?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    userFromR?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    userToR?: UserRelationFilter;
}
