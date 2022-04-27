import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AsignedKudosStatus } from '../prisma/asigned-kudos-status.enum';
import { AsignedKudoCountAggregate } from './asigned-kudo-count-aggregate.output';
import { AsignedKudoMinAggregate } from './asigned-kudo-min-aggregate.output';
import { AsignedKudoMaxAggregate } from './asigned-kudo-max-aggregate.output';

@ObjectType()
export class AsignedKudoGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AsignedKudosStatus, {nullable:false})
    status!: keyof typeof AsignedKudosStatus;

    @Field(() => String, {nullable:false})
    from!: string;

    @Field(() => String, {nullable:false})
    to!: string;

    @Field(() => AsignedKudoCountAggregate, {nullable:true})
    _count?: AsignedKudoCountAggregate;

    @Field(() => AsignedKudoMinAggregate, {nullable:true})
    _min?: AsignedKudoMinAggregate;

    @Field(() => AsignedKudoMaxAggregate, {nullable:true})
    _max?: AsignedKudoMaxAggregate;
}
