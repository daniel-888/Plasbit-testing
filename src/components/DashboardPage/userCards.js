import {Mongo} from 'meteor/mongo';

export const UserCards = new Mongo.Collection('userCards');

// keep UserCardStatuses key and value the same.
export const UserCardStatuses = {
    FINISHED_FORM: 'FINISHED_FORM',
    IN_TRANSACTION: 'IN_TRANSACTION',
    IN_PROGRESS: 'IN_PROGRESS',
    ACTIVE: 'ACTIVE',
    NOT_ACTIVE: 'NOT_ACTIVE'
}

export const currentCardSelector = {$in: [UserCardStatuses.IN_TRANSACTION, UserCardStatuses.FINISHED_FORM]};
export const purchasedCardSelector = {$in: [UserCardStatuses.ACTIVE, UserCardStatuses.NOT_ACTIVE, UserCardStatuses.IN_PROGRESS]};

