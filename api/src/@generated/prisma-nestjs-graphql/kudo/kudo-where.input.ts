import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class KudoWhereInput {

    @Field(() => [KudoWhereInput], {nullable:true})
    AND?: Array<KudoWhereInput>;

    @Field(() => [KudoWhereInput], {nullable:true})
    OR?: Array<KudoWhereInput>;

    @Field(() => [KudoWhereInput], {nullable:true})
    NOT?: Array<KudoWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    message?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    from?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    to?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User_from?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User_to?: UserRelationFilter;
}
