import { User } from "./User";

export interface UploadScriptForm {
  title: string;
  genre: string[];
  status: string;
  synopsis: string;
  contributors: User[];
  pdfFile: File[]; // was never
  imageFile: File[]; // was never

}
