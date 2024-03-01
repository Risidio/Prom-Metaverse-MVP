import { Script } from "./Movie";

export type User = {
  userName: string,
  roles?: string[],
  status: string,
  pronouns?: string,
  scripts?: Script[],
  collaborators?: User[],
  views?: string[], // 'Open-minded',
}
