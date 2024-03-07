import { User } from "./User"

export type Review = {
author: User,
review: string,
rate?: number,
date : Date, // date of publication
}