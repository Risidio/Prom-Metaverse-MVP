import { Script } from "./Script";

export type User = {
  userName: string,
  roles?: string[],
  status: string,
  pronouns?: string,
  scripts?: Script[],
  collaborators?: User[],
  views?: string[], // 'Open-minded',
}
