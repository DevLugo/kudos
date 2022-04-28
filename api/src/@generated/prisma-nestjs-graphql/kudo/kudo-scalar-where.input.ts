import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class KudoScalarWhereInput {

    @Field(() => [KudoScalarWhereInput], {nullable:true})
    AND?: Array<KudoScalarWhereInput>;

    @Field(() => [KudoScalarWhereInput], {nullable:true})
    OR?: Array<KudoScalarWhereInput>;

    @Field(() => [KudoScalarWhereInput], {nullable:true})
    NOT?: Array<KudoScalarWhereInput>;

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
}
