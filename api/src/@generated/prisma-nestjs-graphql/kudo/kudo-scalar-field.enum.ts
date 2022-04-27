import { registerEnumType } from '@nestjs/graphql';

export enum KudoScalarFieldEnum {
    id = "id",
    message = "message",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    from = "from",
    to = "to"
}


registerEnumType(KudoScalarFieldEnum, { name: 'KudoScalarFieldEnum', description: undefined })
