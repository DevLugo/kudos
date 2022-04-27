import { registerEnumType } from '@nestjs/graphql';

export enum AsignedKudoScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    status = "status",
    from = "from",
    to = "to"
}


registerEnumType(AsignedKudoScalarFieldEnum, { name: 'AsignedKudoScalarFieldEnum', description: undefined })
