import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutKudosToInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create-nested-one-without-kudos-to.input';

@InputType()
export class GetReceivedKudosInput {
    
}
