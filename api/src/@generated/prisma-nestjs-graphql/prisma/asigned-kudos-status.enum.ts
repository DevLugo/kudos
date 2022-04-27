import { registerEnumType } from '@nestjs/graphql';

export enum AsignedKudosStatus {
    PENDING = "PENDING",
    SENT = "SENT"
}


registerEnumType(AsignedKudosStatus, { name: 'AsignedKudosStatus', description: undefined })
