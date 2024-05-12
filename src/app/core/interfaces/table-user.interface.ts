import { Result } from "./result.interface";

export interface TableUser {
  name              : string;
  age               : number;
  username          : string;
  date              : Date;
  location          : string;
  picture           : string;
  uuid              : string;
  password          : string;
  locationPicture?  : string;
}

