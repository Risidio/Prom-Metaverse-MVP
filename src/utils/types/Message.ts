import { User } from "./User";

export type Message = {
  sender: User;
  content: string;
  timestamp: Date;
};
