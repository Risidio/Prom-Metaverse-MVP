import { Review } from "./Review"
import { User } from "./User"

export type Script = {
  title: string,
  type: string | 'movie',
  status: string, // for example finished
  pagesAmount: number,
  genres: string[], //['Comedy', 'drama']
  privacy: "private script" | 'public script' | 'shared upon request',
  author: User,
  cowriters: User[],
  description: string,
  reviews?: Review[],
}