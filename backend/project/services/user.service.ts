import {
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions
} from 'mongoose'

import User, { UserDocument } from '../model/user.model'

export function Insert(inputRequest: DocumentDefinition<UserDocument>) {
    return User.create(inputRequest);
}

export function Update(
    query: FilterQuery<UserDocument>,//Whome to update
    update: UpdateQuery<UserDocument>,//What to update
    options: QueryOptions //how to update
) {
    return User.findOneAndUpdate(query, update, options);
}

export function View(
    query: FilterQuery<UserDocument>,//Whome to View
    options: QueryOptions = { lean: true }//how to view
) {
    return User.findOne(query, {}, options)
}

export function ViewAll() {
    return User.find({});
}

export function Delete(query: FilterQuery<UserDocument>) {
    return User.deleteOne(query)
}